"use client";
import { useRouter } from "next/navigation";

async function update(id: string, isDone: boolean, refresh: () => void) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}

export default function Todo({ todo }: any) {
 
  
  const router = useRouter();

  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span style={{ margin: "5px", fontSize: "22px" }}>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)} style={{ margin: "5px" }}>
        Delete
      </button>
    </>
  );
}
