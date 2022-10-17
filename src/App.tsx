import TodosContextProvider from './store/todo-context';

import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
