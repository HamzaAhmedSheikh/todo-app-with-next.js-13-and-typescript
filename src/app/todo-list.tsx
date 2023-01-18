interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  return todos.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: Todo) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              {t.name}
              <button style={{ margin: "5px" }}> Delete </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
