import React from 'react';
import {MyMenu} from './components/myMenu/MyMenu';
import s from './App.module.css';


function App() {
  return (
    <div className={s.menu}>
      <MyMenu/>
    </div>
  )
}

export default App;
