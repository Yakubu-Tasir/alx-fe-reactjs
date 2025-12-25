import React from 'react';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="App">
      {/* This renders your TodoList component on the screen */}
      <TodoList />
    </div>
  );
}

export default App;