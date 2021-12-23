import { v4 as uuidv4 } from 'uuid';

export const addItem = (value: string) => ({
  type: 'ADD_ITEM',
  newItem: {
    detail: value,
    important: false,
    completed: false,
    id: uuidv4()
  }
});

export const removeItem = (id: string) => ({
  type: 'REMOVE_ITEM',
  id: id
});

export const editItem = (id: string, detail: string) => ({
  type: 'EDIT_ITEM',
  id,
  detail
});

export const toggleDone = (id: string, completed: boolean) => ({
  type: 'TOGGLE_DONE',
  id,
  completed
});
export const toggleImportant = (id: string, important: boolean) => ({
  type: 'TOGGLE_IMPORTANT',
  id,
  important
});
