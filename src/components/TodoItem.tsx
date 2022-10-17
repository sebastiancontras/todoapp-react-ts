import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  itemText: string;
  onRemoveTodo: () => void;
}> = props => {
  return (
    <div className={classes.item}>
      <li>{props.itemText}</li>
      <button onClick={props.onRemoveTodo}>delete</button>
    </div>
  );
};

export default TodoItem;
