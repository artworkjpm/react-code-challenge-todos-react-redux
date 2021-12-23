import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import AddTodoItem from '../../molecules/AddTodoItem/AddTodoItem';
import TodoItemUI from '../../organisms/TodoItem/TodoItemUI';

function TodoListPage() {
  const todos = useSelector((state: RootState) => state.todoItems);

  return (
    <div>
      <AddTodoItem />
      {todos.map((todo) => {
        return <TodoItemUI key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default TodoListPage;
