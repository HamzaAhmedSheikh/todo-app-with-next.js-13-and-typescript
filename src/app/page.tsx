import AddNewTodo from "./add-new-todo";
import  TodoList from "./todo-list";

export default async function Home() {
  return (
    <div>      
      <AddNewTodo />
      { await TodoList() }     
    </div>
  )
}
