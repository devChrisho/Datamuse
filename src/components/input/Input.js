import styled from 'styled-components';
import * as React from 'react';

// helper functions
import findRhyme from '../../util/api';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f07070;
  width: 500px;
  border-radius: 1rem;
  padding: 5rem;
  h1 {
    font-family: 'Work Sans', sans-serif;
    color: #4a3da0;
    font-weight: 100;
    font-size: 3.2rem;
    margin-top: 2rem;
    text-align: center;
  }
  input {
    margin-top: 1rem;
    height: 4rem;
    font-size: 1.6rem;
    background-color: rgba(255, 255, 255, 0.153);
    text-align: center;
    border-radius: 0.5rem;
    border: 0.5px solid #4a3da0;
    outline: none;
    color: #4a3da0;

    ::placeholder {
      color: rgba(74, 61, 160, 0.517);
    }
  }
  button {
    padding: 1.6rem;
    width: 60%;
    color: white;
    margin-top: 2rem;
    background-color: #4a3da0;
    outline: none;
    border: 1px solid #4a3da0;
    border-radius: 5rem;
    font-size: 1.6rem;
    font-weight: bold;
    &:active {
      background-color: rgba(74, 61, 160, 0.521);
      transition: 0.1s all ease-in-out;
    }
  }
`;

const Input = ({
  word,
  setWord,
  maxItems,
  setMaxItems,
  visibility,
  setVisibility,
  setSpanText,
  spanText,
}) => {
  // !exp Refs
  const userInput = new React.useRef(null);

  // !exp Event Handlers
  const buttonClickHandler = () => {
    setVisibility(true);
    findRhyme(word, maxItems);
    setSpanText(word);
  };

  const inputKeyPress = e => {
    if (e.key === 'Enter') {
      setVisibility(true);
      findRhyme(word, maxItems);
      userInput.current.value = '';
      setSpanText(word);
    } else {
      setWord(e.target.value);
    }
  };

  return (
    <StyledDiv>
      <h1>Time to find a Rhyme </h1>
      <input
        type='text'
        placeholder='type a word...'
        autoCorrect='false'
        autoComplete='false'
        spellCheck='false'
        ref={userInput}
        onKeyUp={inputKeyPress}
      />
      <button onClick={buttonClickHandler}>Find</button>
    </StyledDiv>
  );
};

export default Input;
