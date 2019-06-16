import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CounterDisplayButton from './CounterDisplayButton';

function App() {
  const [ tapCount, setTapCount ] = useState(0);
  const [ elapsedTime, setElapsedTime ] = useState(0);
  const [ bpm, setBPM ] = useState(120);
  const [ msInterval, setMSInterval ] = useState(null);
  let timer;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setElapsedTime(elapsedTime + 1);
  }, msInterval);

  return (
    <div className="App">
      {elapsedTime}
      <CounterDisplayButton bpm={elapsedTime} />
      {/* <button className="tap" startTimer={startTimer} ></button> */}
      <button className="tap" onClick={() => setMSInterval(1000)} ></button>
    </div>
  );
}

export default App;
