import { useState } from "react";
import { validateForm } from "./validateForm";
import { Errors } from "./types";

export const useCommentForm = (
  onSubmit: (author: string, message: string) => void
) => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(author, message);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(author.trim(), message.trim());
    setAuthor("");
    setMessage("");
    setErrors({});
  };

  return {
    author,
    setAuthor,
    message,
    setMessage,
    errors,
    handleSubmit,
  };
};
