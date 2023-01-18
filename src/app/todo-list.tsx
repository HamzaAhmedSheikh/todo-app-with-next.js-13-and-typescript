import Todo from "./todo";

interface TodoObj {
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
  console.log(todos);
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((i: TodoObj) => {
          return (
            <li key={i.id} style={{ padding: "5px 0" }}>
              <Todo todo={i} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
