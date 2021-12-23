import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from '../../App';
import { ToDoItem } from '../../shared/types';
import * as toDosActions from '../actions';
import todoItems from '../reducer';

//To test the redux store with npm test we need to create the store again using <Provider store={store}>, but using the real action and reducer code. **See bottom of code createTestStore()
let store: any;

describe('Test reducers of redux store', () => {
  beforeEach(() => {
    store = createTestStore();
  });

  test('Add new todo', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    store.dispatch(toDosActions.addItem('test'));
    const checkCreatedToDo = (todo: ToDoItem) => todo.detail === 'test';
    let currentState = store.getState().todoItems;
    console.log(currentState);
    expect(store.getState().todoItems.some(checkCreatedToDo)).toBeTruthy();
  });

  test('Remove a todo', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let idFromStoreItem = store.getState().todoItems[0].id;
    store.dispatch(toDosActions.removeItem(idFromStoreItem));
    const checkCreatedToDo = (id: string) => id === idFromStoreItem;
    let currentState = store.getState().todoItems;
    console.log(currentState);
    expect(store.getState().todoItems.some(checkCreatedToDo)).toBeFalsy();
  });

  test('Edit a todo', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let idFromStoreItem = store.getState().todoItems[0].id;
    store.dispatch(toDosActions.editItem(idFromStoreItem, 'make curry'));
    const checkCreatedToDo = (todo: ToDoItem) => todo.detail === 'make curry';
    let currentState = store.getState().todoItems;
    console.log(currentState);
    expect(store.getState().todoItems.some(checkCreatedToDo)).toBeTruthy();
  });
  test('Toggle done state', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let idFromStoreItem = store.getState().todoItems[0].id;
    store.dispatch(toDosActions.toggleDone(idFromStoreItem, true));
    const checkCreatedToDo = (todo: ToDoItem) => todo.completed === true;
    let currentState = store.getState().todoItems;
    console.log(currentState);
    expect(store.getState().todoItems.some(checkCreatedToDo)).toBeTruthy();
  });
});

export function createTestStore() {
  const store = createStore(
    combineReducers({
      todoItems
    })
  );
  return store;
}
