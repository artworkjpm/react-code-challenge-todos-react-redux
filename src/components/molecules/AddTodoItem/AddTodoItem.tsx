import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/actions';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';

function AddTodoItem() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(addItem(todo));
  }

  function handleOnHitEnterButton(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.code === 'Enter') {
      dispatch(addItem(todo));
    }
  }

  return (
    <div>
      <Input
        inputValue={todo}
        onChange={(newText: string) => setTodo(() => newText)}
        inputPlaceholder="Add your todo here"
        onKeyDown={handleOnHitEnterButton}
      />
      <Button onClick={handleOnClick} className="add-button">
        Add Item
      </Button>
    </div>
  );
}

export default AddTodoItem;
