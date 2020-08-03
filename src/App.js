import React from 'react';
import './App.css';
import Get from './Componnet/PersonList';
import Post from './Componnet/post'
import Deletepost from './Componnet/delete'

function App() {
  return (
    <div className="App">
      <Get />
      <Post />
      <Deletepost />
    </div>
  );
}

export default App;
