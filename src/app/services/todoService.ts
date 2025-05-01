const API_URL = "/api/todos";

export const getTodos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addTodo = async (todo: { text: string; category?: string }) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return await res.json();
};

export const updateTodo = async (id: string, updates: object) => {
  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...updates }),
  });
  return await res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return await res.json();
};
