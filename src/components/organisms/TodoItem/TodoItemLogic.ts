import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  editItem,
  removeItem,
  toggleDone,
  toggleImportant
} from '../../../redux/actions';
import { ToDoItem } from '../../../shared/types';

function TodoItemLogic(props: ToDoItem) {
  const todo = props;
  const [editTodo, setEditTodo] = useState(todo.detail);
  const [open, setOpen] = useState(false);
  const [important, setImportant] = useState(false);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  function handleDelete(id: string) {
    const warn = window.confirm('Are you sure you want to delete this?');
    warn && dispatch(removeItem(id));
  }

  function handleEdit() {
    dispatch(editItem(todo.id, editTodo));
    setOpen(false);
  }

  function handleImportant() {
    setImportant((prev) => !prev);
    dispatch(toggleImportant(todo.id, important));
  }

  function handleDone() {
    setDone((prev) => !prev);
    dispatch(toggleDone(todo.id, done));
  }

  function handleItemStyling() {
    if (important && done) {
      return 'done important';
    }
    if (important) {
      return 'important';
    }
    if (done) {
      return 'done';
    }
  }

  function handleOnHitEnterButton(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.code === 'Enter') {
      dispatch(editItem(todo.id, editTodo));
      setOpen(false);
    }
  }

  return {
    editTodo,
    setEditTodo,
    open,
    setOpen,
    important,
    setImportant,
    done,
    setDone,
    dispatch,
    handleDelete,
    handleEdit,
    handleImportant,
    handleDone,
    handleItemStyling,
    handleOnHitEnterButton
  };
}

export default TodoItemLogic;
