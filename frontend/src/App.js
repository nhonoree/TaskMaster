import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TaskMaster</h1>
        <p>Your simple and intuitive to-do list app to stay organized.</p>
      </header>
      <TaskList />
    </div>
  );
}

export default App;