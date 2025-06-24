import { Box } from "@mantine/core";
import Image from "next/image";
import { CommentForm } from "../CommentForm/CommentForm";
import { CommentPopup } from "./CommentPopup";
import { Comment } from "../../types/commentType";
import { useImageCommentForm } from "./useImageCommentForm";
import { ImageCommentMarkers } from "./ImageCommentMarkers";

type Props = {
  onAddComment: (comment: Comment) => void;
  comments?: Comment[];
};

export const ImageWithComments = ({ onAddComment, comments = [] }: Props) => {
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
          display: "block",
        }}
      />

      <ImageCommentMarkers comments={comments} />

      {area && (
        <Box
          style={{
            position: "absolute",
            top: area.y,
            left: area.x,
            width: 12,
            height: 12,
            background: "#1971c2",
            borderRadius: "50%",
            border: "2px solid white",
            boxShadow: "0 0 4px #0003",
            zIndex: 10,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {isFormOpen && area && (
        <CommentPopup area={area}>
          <CommentForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </CommentPopup>
      )}
    </Box>
  );
};
