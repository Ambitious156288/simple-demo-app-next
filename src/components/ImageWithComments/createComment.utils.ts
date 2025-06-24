import { v4 as uuidv4 } from "uuid";
import type { HighlightArea, Comment } from "../../types/commentType";

export const createComment = (
  author: string,
  message: string,
  area: HighlightArea
): Comment => ({
  id: uuidv4(),
  author,
  message,
  createdAt: new Date().toISOString(),
  highlight: area,
  replies: [],
});
