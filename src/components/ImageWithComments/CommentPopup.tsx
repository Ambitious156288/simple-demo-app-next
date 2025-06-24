import { Box } from "@mantine/core";
import type { HighlightArea } from "../../types/commentType";
import { ReactNode } from "react";

type Props = {
  area: HighlightArea;
  children: ReactNode;
};

export const CommentPopup = ({ area, children }: Props) => (
  <Box
    // @TODO: Replace inline styles with Mantine's styling system (e.g. useStyles).
    // This is a temporary solution — first time using the library.
    style={{
      position: "absolute",
      top: area.y + area.height + 10,
      left: area.x,
      backgroundColor: "white",
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 6,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      zIndex: 100,
      width: 280,
    }}
  >
    {children}
  </Box>
);
