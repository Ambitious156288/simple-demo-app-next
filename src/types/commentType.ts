export type HighlightArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Reply = {
  id: string;
  message: string;
  author: string;
  createdAt: string;
};

export type Comment = {
  id: string;
  message: string;
  author: string;
  createdAt: string;
  highlight: HighlightArea;
  replies: Reply[];
};
