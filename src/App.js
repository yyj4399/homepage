import React from 'react';
import avatar from './avatar.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App-mobile.css';

const setTitle = title => document.title = title;

function App() {
  setTitle("yyj4399");
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-body-1">
          <img src={avatar} className="App-avatar" alt="avatar" />
        </div>
        <div className="App-body-2">
          <p className="App-body-2-header">yyj4399</p>
          <p className="App-body-2-text">A developer from the Milky Way.</p>
          <a href="https://github.com/yyj4399">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
