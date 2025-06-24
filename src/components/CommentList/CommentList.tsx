import { useState } from "react";
import { Box } from "@mantine/core";
import type { Comment, Reply } from "../../types/commentType";
import { CommentItem } from "./CommentItem";

type Props = {
  comments: Comment[];
  onAddReply: (commentId: string, reply: Reply) => void;
};

export const CommentList = ({ comments, onAddReply }: Props) => {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleReplySubmit = (
    commentId: string,
    author: string,
    message: string
  ) => {
    const newReply: Reply = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      author,
      message,
      createdAt: new Date().toISOString(),
    };
    onAddReply(commentId, newReply);
    setReplyingTo(null);
  };

  return (
    <Box>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isReplying={replyingTo === comment.id}
          onReplyClick={() => setReplyingTo(comment.id)}
          onCancelReply={() => setReplyingTo(null)}
          onAddReply={handleReplySubmit}
        />
      ))}
    </Box>
  );
};
