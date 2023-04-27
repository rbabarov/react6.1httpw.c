import './css/App.css';
import './css/stamp.css';
import React, { useState } from 'react';
import { Select } from "./components/Select";
import { RenderClock } from './components/RenderClock';

function App() {
  const [clocks, setClocks] = useState([]);

  function deleteClok(elem) {
    const afterVdelete = clocks.filter(el => el.id !== elem);
    setClocks(afterVdelete);
  }
  function HendlZone(data) {
    if(data.city === 'empty') {return;}
    setClocks(prevClocks => [...prevClocks, data]);// Так пополняем список часов clocks. Функция асинхронная!!!!
    // Можно пользовать callback!!!
  }
  return (
    <div className="App">
      <Select onSelectTimeZone={(data) =>{HendlZone(data)}}/>
      <RenderClock data={clocks} onClokDelete={(elem) =>{deleteClok(elem)}}/>
    </div>
  );
}

export default App;
