import { Box } from "@mantine/core";
import Image from "next/image";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentPopup } from "./CommentPopup";
import { ImageHighlight } from "./ImageHighlight";
import { Comment } from "../../types/commentType";
import { useImageCommentForm } from "./useImageCommentForm";

type Props = {
  onAddComment: (comment: Comment) => void;
};

export const ImageWithComments = ({ onAddComment }: Props) => {
  const { area, isFormOpen, handleImageClick, handleSubmit, handleCancel } =
    useImageCommentForm(onAddComment);

  return (
    <Box pos="relative">
      <Image
        src="/demo-image.png"
        alt="Commentable"
        width={600}
        height={400}
        onClick={handleImageClick}
        style={{
          maxWidth: "100%",
          cursor: isFormOpen ? "not-allowed" : "crosshair",
          border: "1px solid black",
        }}
      />

      {area && <ImageHighlight area={area} />}

      {isFormOpen && area && (
        <CommentPopup area={area}>
          <CommentForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CommentPopup>
      )}
    </Box>
  );
};
