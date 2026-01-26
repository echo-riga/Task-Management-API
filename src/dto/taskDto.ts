export type TaskCreateDto = {
  userId: number;
  title: string;
  completed?: boolean;
};

export type TaskUpdateDto = {
  title?: string;
  completed?: boolean;
};
