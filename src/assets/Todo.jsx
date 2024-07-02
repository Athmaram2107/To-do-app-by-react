import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Form from "./Form";
// separate the component into separate jsx components,if there are common components in separated jsx components then inlcude them in the main jsx component pass it them as props.Here todo->form->todolist.todos use state is included in todo as it is common in form and todolist components.
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
