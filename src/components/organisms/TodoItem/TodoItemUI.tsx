import { ToDoItem } from '../../../shared/types';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import TodoItemLogic from './TodoItemLogic';

function TodoItemUI(todo: ToDoItem) {
  const {
    editTodo,
    setEditTodo,
    open,
    setOpen,
    important,
    done,
    handleDelete,
    handleEdit,
    handleImportant,
    handleDone,
    handleItemStyling,
    handleOnHitEnterButton
  } = TodoItemLogic(todo);

  return (
    <div>
      <div className="todo-item">
        {open ? (
          <>
            <Input
              inputValue={editTodo}
              onChange={(editText: string) => setEditTodo(() => editText)}
              inputPlaceholder="Edit todo"
              onKeyDown={handleOnHitEnterButton}
            />
            <Button onClick={() => handleEdit()}>Save Edit</Button>
          </>
        ) : (
          <div className={handleItemStyling()}>{todo.detail} </div>
        )}
        <Button
          onClick={() => handleImportant()}
          className={important ? 'important-button' : ''}
        >
          !
        </Button>
        <Button onClick={() => setOpen((prev) => !prev)}>Edit</Button>
        <Button
          onClick={() => handleDone()}
          className={done ? 'done-button' : ''}
        >
          ✓
        </Button>
        <Button onClick={() => handleDelete(todo.id)}>X</Button>
      </div>
    </div>
  );
}

export default TodoItemUI;
