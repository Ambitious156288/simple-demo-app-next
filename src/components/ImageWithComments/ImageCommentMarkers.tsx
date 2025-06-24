import { Box } from "@mantine/core";
import type { Comment } from "../../types/commentType";

type Props = {
  comments: Comment[];
};

export const ImageCommentMarkers = ({ comments }: Props) => (
  <>
    {comments.map(({ id, author, message, highlight }) =>
      highlight ? (
        <Box
          key={id}
          style={{
            position: "absolute",
            top: highlight.y,
            left: highlight.x,
            width: 12,
            height: 12,
            background: "red",
            border: "2px solid white",
            cursor: "pointer",
            zIndex: 10,
            display: "block",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: 16,
              left: 0,
              minWidth: 120,
              background: "#fff",
              color: "#222",
              border: "1px solid #ddd",
              padding: 8,
              fontSize: 13,
              whiteSpace: "pre-line",
            }}
          >
            <strong>{author}</strong>
            <br />
            {message}
          </Box>
        </Box>
      ) : null
    )}
  </>
);
