import React, { useEffect, useState } from 'react';

import Todo from '../models/todo';

const getIntialTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

type TodosContextObj = {
  items: Todo[];
  addTodo: (value: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC<{
  children: React.ReactNode;
}> = props => {
  const [todos, setTodos] = useState<Todo[]>(getIntialTodos);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevTodos => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
