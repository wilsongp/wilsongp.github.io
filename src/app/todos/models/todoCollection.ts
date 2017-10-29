import { Todo } from "./todo";

export interface TodoCollection {
  data: Todo[];
  pending: boolean;
  error: string;
}
