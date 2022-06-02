import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/views/article/article';
import Navbar from './components/common/navbar';

function App() {
  return (
    <div className="App">
      <><Navbar/></>        
      <header className="App-header">
        <Article></Article>
      </header>
    </div>
  );
}

export default App;
