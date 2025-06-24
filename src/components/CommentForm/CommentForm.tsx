import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import { useCommentForm } from "./useCommentForm";

type Props = {
  onSubmit: (author: string, message: string) => void;
  onCancel: () => void;
  submitLabel?: string;
};

export const CommentForm = ({
  onSubmit,
  onCancel,
  submitLabel = "Add",
}: Props) => {
  const { author, setAuthor, message, setMessage, errors, handleSubmit } =
    useCommentForm(onSubmit);

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextInput
        label="Author"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.currentTarget.value)}
        error={errors.author}
        required
        autoFocus
      />
      <Textarea
        label="Comment"
        placeholder="Write your comment here..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        error={errors.message}
        required
        minRows={3}
      />
      <Group>
        <Button variant="default" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{submitLabel}</Button>
      </Group>
    </Box>
  );
};
