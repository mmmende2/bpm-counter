import styled, { createGlobalStyle } from 'styled-components';
// import styled, { css, createGlobalStyle } from 'styled-components';

// Variables
const dPad = '20px';
const fillSanPadding = padding => `calc(100% - (${padding} * 2))`;
  

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: sans-serif;
    color: rebeccapurple !important;
  }
  #root {
    height: 100vh;
    width: 100vw;
  }
`;

export const Sapp = styled('div')`
  height: 100vh;
  width: 100vw;
`;

export const ScontentWrap = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${fillSanPadding(dPad)};
  justify-content: space-around;
  padding: ${dPad};
  width: ${fillSanPadding(dPad)};
`;

export const Sbutton = styled('div')`
  border-radius: 5px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
`;

export const SbpmDisplay = styled('div')`
  border-radius: 5px;
  font-size: 6rem;
  line-height: 6rem;
  border: 2px solid black;
  height: min-content;
  display: flex;
  justify-content: center;
  padding: 0px ${dPad};
  user-select: none;
`;

export const StapButton = styled('div')`
  border-radius: 5px;
  height: 50%;
  width: 100%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Stext = styled('div')`
  user-select: none;
`;
