import { v4 as uuidv4 } from 'uuid';
import { ToDoItem } from '../shared/types';

const initialState: ToDoItem[] = [
  {
    detail: 'make bread',
    important: false,
    completed: false,
    id: uuidv4()
  },
  {
    detail: 'make soup',
    important: false,
    completed: false,
    id: uuidv4()
  }
];

const todoItems = (
  state: ToDoItem[] = initialState,
  action: any
): ToDoItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.newItem];
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);
    case 'EDIT_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, detail: action.detail };
        } else return item;
      });
    case 'TOGGLE_IMPORTANT':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, important: action.important };
        } else return item;
      });
    case 'TOGGLE_DONE':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: action.completed };
        } else return item;
      });
    default:
      return state;
  }
};
export default todoItems;
