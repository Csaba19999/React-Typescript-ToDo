import Todos from "./components/Todos";
import TodosContextProvide from "./store/todos-context";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <TodosContextProvide>
      <NewTodo />
      <Todos />
    </TodosContextProvide>
  );
}

export default App;
