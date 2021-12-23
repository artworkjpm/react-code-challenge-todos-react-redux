import React from 'react';
import './App.css';
import * as Template from './components/templates';

const App: React.FC = () => (
  <div className="App">
    <Template.TodoListPage />
  </div>
);

export default App;
