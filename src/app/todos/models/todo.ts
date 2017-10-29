export interface Todo {
  id: number;
  createdDate: Date;
  title: string;
  body: string;
  completed: boolean;
}

export interface NewTodo {
  title: string;
  body: string;
}

export function generateMockTodo(): Todo {
  return {
    id: Math.floor(Math.random() * 100),
    createdDate: new Date(),
    title: `Todo ${Math.random() * 99 + 1}`,
    body: 'Some text in the body',
    completed: false
  };
}
