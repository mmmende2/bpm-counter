import React, { useState, useRef, useEffect } from 'react';
import './nightmode.css'
import { GlobalStyle, ScontentWrap, StapButton, Sbutton, Sapp, Stext } from './style';
import CounterDisplayButton from './CounterDisplayButton';

function App() {
  const [tapCount, setTapCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bpm, setBPM] = useState(0);
  const [bpmArray, setBPMArray] = useState([]);
  const [msInterval, setMSInterval] = useState(250);
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
  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e) {
        if(e.keyCode === 32) {
          handleTap();
        }
      }
    });
    return () => {
      document.removeEventListener('keypress', checkKeyPress);
    }
  }, []);

  const checkKeyPress = (e) => {
    // 32 is space
    if (e) {
      if (e.keyCode === 32 || e.keyCode === "KeyT") {
        handleTap();
      }
    }
  };
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
    setElapsedTime(elapsedTime + 0.25);
  }, timerIsRunning ? msInterval : null);

  function stopAndResetTimer() {
    console.log('stop n resetbabby');
    setTimerIsRunning(false);
    clearBPMArray();
    clearAll();
  }



  // BPM = tapCount * 60 sec / elapsedTime

  function calculateBPM() {
    // const newBPM = ((tapCount * 60) / elapsedTime);
    const newBPM = ((tapCount * 60) / elapsedTime);
    console.log(newBPM);
    if (!isNaN(newBPM) && isFinite(newBPM)) {
      // setBPM(newBPM);
      const newArray = [...bpmArray];
      newArray.push(newBPM)
      setBPMArray(newArray);
      // (bpmArray.length > 8) ? calculateBPMAverage() : setBPM(newBPM);
      setBPM(newBPM);
    }
  }

  function clearAll() {
    clearBPMArray();
    clearTapCount();
    clearEllapsedTime();
    clearBPM();
  }

  function clearBPM() {
    setBPM(0);
  }
  function clearEllapsedTime() {
    setElapsedTime(0);
  }

  function clearTapCount() {
    setTapCount(0);
  }
  function clearBPMArray() {
    setBPMArray([]);
  }
  function toggleNightMode() {
    // debugger
  }

  function calculateBPMAverage() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setBPM(bpmArray.reduce(reducer) / bpmArray.length);

    // setBPM(0);
  }

  function handleTap() {
    console.log('handle tap');
    console.log(bpm);
    setTimerIsRunning(true);
    console.log('tap count is');
    console.log(tapCount);
    setTapCount(tapCount + 1);
    calculateBPM();
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
          <Stext>Start + Pause Button</Stext>
        </Sbutton>
        <StapButton 
          onClick={handleTap}
          onKeyPress={handleTap}
          role="button"
        >
          <Stext>Tap Baby!</Stext>
        </StapButton>
        <Sbutton 
          onClick={stopAndResetTimer} 
          onKeyPress={stopAndResetTimer}
          role="button"
        >
          <Stext>Stop + Reset Button</Stext>
        </Sbutton>
        <Sbutton 
          onClick={toggleNightMode()}
          onKeyPress={toggleNightMode()}
          role="button"
        >
          <Stext>Toggle Night Mode</Stext>
        </Sbutton>
      </ScontentWrap>
  );
}

export default App;
