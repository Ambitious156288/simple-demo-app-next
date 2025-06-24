import { useCallback, useState } from "react";
import type { HighlightArea, Comment } from "../../types/commentType";
import { createComment } from "./createComment.utils";

export const useImageCommentForm = (
  onAddComment: (comment: Comment) => void
) => {
  const [area, setArea] = useState<HighlightArea | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleImageClick = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      if (isFormOpen) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setArea({ x, y, width: 10, height: 10 });
      setIsFormOpen(true);
    },
    [isFormOpen]
  );

  const handleSubmit = (author: string, message: string) => {
    if (!area) return;

    const newComment = createComment(author, message, area);
    onAddComment(newComment);
    setArea(null);
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setArea(null);
    setIsFormOpen(false);
  };

  return {
    area,
    isFormOpen,
    handleImageClick,
    handleSubmit,
    handleCancel,
  };
};
