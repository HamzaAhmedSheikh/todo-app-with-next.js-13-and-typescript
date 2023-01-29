"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name: string, refresh: () => void) {
  const response = await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  if (response.status < 300) {
    refresh();
  }
}


export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
        style={{ margin: "5px" }}
      >
        Add
      </button>
    </div>
  );
}