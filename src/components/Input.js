import axios from 'axios';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const api = `https://api.datamuse.com/words?rel_rhy=`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f07070;
  width: 30%;
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

  .hide {
    display: none;
  }
`;

const StyledButton = styled.button`
  padding: 1.6rem;
  width: 40%;
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
`;

const StyledOutput = styled.div`
  box-shadow: inset 5px 5px 8px rgba(0, 0, 0, 0.263),
    inset -3px -3px 10px rgba(255, 255, 255, 0.201);
  width: 100%;
  margin-top: 2rem;
  background-color: slategray;
  border: 1 px solid darkblue;
  color: white;
  padding: 3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  h2 {
    span {
      text-decoration: underline;
      color: #80ffb7;
    }
  }
`;

const StyledLi = styled.li`
  font-size: 1.6rem;
  margin-left: 2rem;
  margin-top: 1rem;
  padding-left: 1rem;
`;

const Input = () => {
  const [word, setWord] = useState('');
  const [maxItems, setMaxItems] = useState(10);
  const [results, setResults] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [spanText, setSpanText] = useState('');

  const userInput = new useRef(null);

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
      console.log(spanText);
    } else {
      setWord(e.target.value);
    }
  };

  const findRhyme = async (userWord, userMaxItems) => {
    const endpoint = api + userWord + '&max=' + userMaxItems;
    const result = await axios(endpoint);
    setResults(result.data);
  };

  const resultsList = results.map((item, key) => {
    return (
      <StyledLi key={key}>
        {item.word} ({item.numSyllables} syll.)
      </StyledLi>
    );
  });

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
      ></input>
      <StyledButton onClick={buttonClickHandler}>Find</StyledButton>
      <StyledOutput className={visibility === true ? '' : 'hide'}>
        <h2 className={visibility === true ? '' : 'hide'}>
          Words that rhyme with <span>{spanText}</span>
        </h2>
        <ol>{resultsList}</ol>
      </StyledOutput>
    </StyledDiv>
  );
};

export default Input;
