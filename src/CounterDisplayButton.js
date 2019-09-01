import React from 'react';
import { SbpmDisplay } from './style';

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

// Limit the character count, the parent box will always take whatever you gives it and size it b
const CounterDisplayButton = (props) => {
  const { bpm } = props;
  return (
    <SbpmDisplay onClick={() => {}} onKeyPress={() => {}} role="button">{printBPM(bpm)}</SbpmDisplay>
  );
}

export default CounterDisplayButton;