import logo from './logo.svg';
import React from 'react';
import scrollbar from 'smooth-scrollbar';
import './App.css';
import Main from './Main';

/* 
scrollbar.init(document.querySelector('#smooth-scroll')); */


function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;


/* import logo from './logo.svg';
import React from 'react';
import scrollbar from 'smooth-scrollbar';
import './App.css';
import Main from './Main';

scrollbar.init(document.querySelector('#smooth-scroll'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default App; */