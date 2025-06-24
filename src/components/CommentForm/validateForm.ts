import type { Errors } from "./types";

export const validateForm = (author: string, message: string): Errors => {
  const errors: Errors = {};
  if (author.trim().length < 2)
    errors.author = "Author must be at least 2 characters";
  if (message.trim().length < 3)
    errors.message = "Message must be at least 3 characters";
  return errors;
};
