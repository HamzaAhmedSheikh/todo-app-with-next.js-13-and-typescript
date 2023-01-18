import Todo from "./todo";

interface Todo {
  id: string;
  name: string;
  isDone: boolean;
};


const getTodos = async () => {
  let todo = await fetch("http://localhost:3001/api/todo/list");
  return todo.json();
};

export default async function TodoList() {
  const { todos } = await getTodos();
  
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: Todo) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
