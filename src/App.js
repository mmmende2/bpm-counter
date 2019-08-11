import React, { useState, useRef, useEffect } from 'react';
import './nightmode.css'
import { GlobalStyle, ScontentWrap, StapButton, Sbutton, Sapp, } from './style';
import CounterDisplayButton from './CounterDisplayButton';

function App() {
  const [tapCount, setTapCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bpm, setBPM] = useState(0);
  const [bpmArray, setBPMArray] = useState([]);
  const [msInterval, setMSInterval] = useState(1000);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  let timer;
  // space bar lets you tap
  // 'r' is a reset
  // light mode, dark mode, other modes
  // if space bar is being used hide the tap button 
  // useEffect(() => {
  //   console.log(bpmArray);
  //   setBPMArray(bpmArray.push(bpm))
  // }, bpm);

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
  }, timerIsRunning ? msInterval : null);

  function stopAndResetTimer() {
    setTimerIsRunning(false);
    setElapsedTime(0);
  }


  // BPM = tapCount * 60 sec / elapsedTime

  function calculateBPM() {
    const newBPM = ((tapCount * 60) / elapsedTime);
    if (!isNaN(newBPM) && isFinite(newBPM)) {
      setBPM(newBPM);
      const newArray = [...bpmArray];
      newArray.push(newBPM)
      // setBPMArray(bpmArray.push(bpm))
      setBPMArray(newArray);
      console.log(bpmArray);
    }
  }
  function toggleNightMode() {
    debugger
  }

  function calculateBPMAverage() {


  }

  return (
  
      <ScontentWrap>
        <GlobalStyle />
        <CounterDisplayButton bpm={bpm} />
        {/* <span style={{ 'color': 'aqua' }}>elapsed timem {elapsedTime} and tap count {tapCount}</span> */}
        <Sbutton 
          onClick={() => setTimerIsRunning(!timerIsRunning)} 
          onKeyPress={() => setTimerIsRunning(!timerIsRunning)} 
          role="button" 
        >
          Start + Pause Button 
        </Sbutton>
        <StapButton 
          onClick={() => { setTimerIsRunning(true); setTapCount(tapCount + 1); calculateBPM() }}
          onKeyPress={() => { setTimerIsRunning(true); setTapCount(tapCount + 1); calculateBPM() }}
          role="button"
        >
          Tap Baby!
        </StapButton>
        <Sbutton 
          onClick={() => stopAndResetTimer()} 
          onKeyPress={() => stopAndResetTimer()} 
          role="button"
        >
          Stop + Reset Button 
        </Sbutton>
        <Sbutton 
          onClick={toggleNightMode()}
          onKeyPress={toggleNightMode()}
          role="button"
        >
          Toggle Night Mode
        </Sbutton>
      </ScontentWrap>
  );
}

export default App;
