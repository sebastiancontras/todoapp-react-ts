import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todo-context';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map(item => (
        <TodoItem
          key={item.id}
          itemText={item.text}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
