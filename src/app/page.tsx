import AddNewTodo from "../components/add-new-todo";
import  TodoList from "../components/todo-list";

export default async function Home() {
  return (
    <div>      
      <AddNewTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </div>
  )
}
