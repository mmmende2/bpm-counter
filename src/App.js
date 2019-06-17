import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import CounterDisplayButton from './CounterDisplayButton';

function App() {
  const [ tapCount, setTapCount ] = useState(0);
  const [ elapsedTime, setElapsedTime ] = useState(0);
  const [ bpm, setBPM ] = useState(0);
  const [ bpmArray, setBPMArray ] = useState([]);
  const [ msInterval, setMSInterval ] = useState(1000);
  const [ timerIsRunning, setTimerIsRunning ] = useState(false);
  let timer;

  // space bar lets you tap
  // 'r' is a reset
  // light mode, dark mode, other modes
  // if space bar is being used hide the tap button 
  // useEffect(() => {
  //   console.log(bpmArray);
  //   setBPMArray(bpmArray.push(bpm))
  // }, bpm);
    // BPM = tapCount * 60 sec / elapsedTime

  function calculateBPM() {
    console.log('e then m');
    console.log(elapsedTime);
    const multiplier = 60 / elapsedTime;
    console.log(multiplier);
    const result = tapCount * multiplier;
    setBPM(result);
    // setBPM(tapCount * ( 60 / elapsedTime));
    // setBPMArray(bpmArray.push(bpm));
  }


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
    calculateBPM();
  }, timerIsRunning ? msInterval : null);

  function stopAndResetTimer() {
    setTimerIsRunning(false);
    setElapsedTime(0);
  }



  function calculateBPMAverage() {

  } 

  return (
    <div className="App">
      <CounterDisplayButton bpm={bpm} />
      elapsed timem {elapsedTime} and tap count {tapCount} bpm array is {bpmArray}
      <button className="" onClick={() => setTimerIsRunning(!timerIsRunning)} >Start + Pause Button </button>
      <button className="tap" onClick={() => {setTimerIsRunning(true); setTapCount(tapCount + 1);}} >Tap Baby!</button>
      <button onClick={() => stopAndResetTimer()} >Stop + Reset Button </button>
    </div>
  );
}

export default App;
