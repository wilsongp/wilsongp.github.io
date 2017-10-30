export interface Repo {
  name: string;
}

export function generateMockTodo(): Repo {
  return {
    name: 'Test repo name'
  };
}
