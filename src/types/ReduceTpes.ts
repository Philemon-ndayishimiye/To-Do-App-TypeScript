export type ActionType =
  | { type: "Add Task"; payload: { name: string } }
  | { type: "Remove Task"; payload: { id: string | number } }
  | { type: "Update Task"; payload: { id: string | number } }
  | { type: "toggle Todo"; payload: { id: string | number } };
