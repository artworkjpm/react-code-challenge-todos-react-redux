import { combineReducers } from 'redux';
import todoItems from './reducer';

export const rootReducer = combineReducers({
  todoItems
});

export type RootState = ReturnType<typeof rootReducer>;
