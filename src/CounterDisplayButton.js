import React from 'react';

const CounterDisplayButton = (props) => {
  const { bpm } = props;
  return (
    <button>{bpm}</button>
  );
}

export default CounterDisplayButton;