import { Text, Box, Button } from "@mantine/core";
import type { Comment } from "../../types/commentType";
import { CommentForm } from "../CommentForm/CommentForm";

type Props = {
  comment: Comment;
  isReplying: boolean;
  onReplyClick: () => void;
  onCancelReply: () => void;
  onAddReply: (commentId: string, author: string, message: string) => void;
};

export const CommentItem = ({
  comment,
  isReplying,
  onReplyClick,
  onCancelReply,
  onAddReply,
}: Props) => (
  <Box>
    <Text>Author: {comment.author}</Text>
    <Text>{new Date(comment.createdAt).toLocaleString()}</Text>
    <Text>Comment: {comment.message}</Text>

    {!isReplying ? (
      <Button variant="outline" onClick={onReplyClick}>
        Reply
      </Button>
    ) : (
      <hr />
    )}

    {isReplying && (
      <Box>
        <CommentForm
          submitLabel="Add Reply"
          onSubmit={(author, message) =>
            onAddReply(comment.id, author, message)
          }
          onCancel={onCancelReply}
        />
      </Box>
    )}

    {comment.replies.length > 0 && (
      <Box>
        {comment.replies.map((reply, index) => (
          <Box
            key={reply.id}
            // @TODO: Replace inline styles with Mantine's styling system (e.g. useStyles).
            // This is a temporary solution — first time using the library.
            style={{
              marginBottom: 8,
              marginLeft: 30 * (index + 1),
              borderLeft: "2px solid #ddd",
              paddingLeft: 8,
            }}
          >
            <Text>Author: {reply.author}</Text>
            <Text>{new Date(reply.createdAt).toLocaleString()}</Text>
            <Text>Comment: {reply.message}</Text>
          </Box>
        ))}
      </Box>
    )}
    <hr />
  </Box>
);
