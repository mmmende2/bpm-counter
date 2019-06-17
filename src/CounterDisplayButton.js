import React from 'react';

const CounterDisplayButton = (props) => {
  const { bpm } = props;
  return (
    // <button id="counter-display">{bpm === 0 ? "000" : bpm}</button>
    <button id="counter-display">{printBPM(bpm)}</button>
  );
}

const printBPM = (bpm) => {
  if (isNaN(bpm)) {
    return "000";
  }

  const stringyBPM  = bpm.toFixed();

  const leadingZero = "0";
  // if (bpm > 99) {
  //   return bpm
  // } else if (bpm > 9) {
  //   return leadingZero + bpm;
  // } else {
  //   return leadingZero + leadingZero + bpm;
  // }

  if (stringyBPM.length > 2) {
    return stringyBPM;
  } else if (stringyBPM.length > 1) {
    return leadingZero + stringyBPM;
  } else {
    return leadingZero + leadingZero + bpm;
  }
}

export default CounterDisplayButton;