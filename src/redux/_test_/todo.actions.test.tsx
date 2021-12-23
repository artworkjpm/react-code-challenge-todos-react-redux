// Uses mocked store in this case (not testing store updates here, but just actions type-payloads definitions)
import configureStore from 'redux-mock-store';
import { v4 as uuidv4 } from 'uuid';
import * as toDosActions from '../actions';

const mockStore = configureStore();
let store: any;

const mockedStore = mockStore({
  toDos: [
    {
      detail: 'make breadx',
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
  ]
});

test('addItem to todo list', () => {
  store = mockedStore;
  store.dispatch(toDosActions.addItem('make salad'));
  const actions = store.getActions();
  expect(actions[0].newItem.detail).toEqual('make salad');
});

test('addItem check type name', () => {
  store = mockedStore;
  store.dispatch(toDosActions.addItem('make salad x'));
  const actions = store.getActions();
  expect(actions[1].type).toEqual('ADD_ITEM');
});

test('removeItem from list', () => {
  store = mockedStore;
  let id = store.getState().toDos[0].id;
  store.dispatch(toDosActions.removeItem(id));
  const actions = store.getActions();
  expect(actions[2]).toEqual({
    type: 'REMOVE_ITEM',
    id
  });
});

// test('it performs edit to do action properly', () => {
//   store = mockedStore;
//   store.dispatch(toDosActions.EDIT_TO_DO(mockedtoDo));
//   const actions = store.getActions();
//   expect(actions[2]).toEqual({
//     payload: mockedtoDo,
//     type: 'EDIT_TO_DO'
//   });
// });

// test('it performs remove to do action properly', () => {
//   store = mockedStore;
//   store.dispatch(toDosActions.REMOVE_TO_DO(mockedtoDo.id));
//   const actions = store.getActions();
//   expect(actions[3]).toEqual({
//     payload: mockedtoDo.id,
//     type: 'REMOVE_TO_DO'
//   });
// });
