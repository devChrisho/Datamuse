import styled from "styled-components";
import * as React from "react";
import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Work Sans", sans-serif;
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
    cursor: pointer;
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
  results,
  setResults,
  setIsLoading,
}) => {
  // !exp Refs
  const userInput = new React.useRef("");

  // custom function
  const findRhyme = async (userWord, userMaxItems) => {
    const api = `https://api.datamuse.com/words?rel_rhy=`;
    const endpoint = api + userWord + "&max=" + userMaxItems;
    try {
      const res = await axios(endpoint);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // !exp Event Handlers
  const onClickHandler = () => {
    // if (
    //   userInput.current.value !== '' &&
    //   userInput.current.value.split(' ').length === 1
    // ) {
    //   // setWord(userInput.current.value);
    //   console.log(word)
    //   getRhyme();
    // }
  };

  const keydownHandler = async (e) => {
    if (e.key === "Enter") {
      const data = await findRhyme(userInput.current.value, maxItems);
      await setResults(data);
      await setWord(userInput.current.value);
      setVisibility(true);
      setSpanText(word);
    }
  };

  // function
  const getRhyme = async () => {
    const data = await findRhyme(userInput.current.value, maxItems);
    await setResults(data);
    setIsLoading(true);
    setVisibility(true);
    setIsLoading(false);
    setSpanText(word);
    userInput.current.value = "";
  };

  return (
    <StyledDiv>
      <h1>Time to find a Rhyme </h1>
      <input
        type="text"
        placeholder="type a word..."
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        ref={userInput}
        onKeyDown={keydownHandler}
      />
      <button onClick={onClickHandler}>Find</button>
    </StyledDiv>
  );
};

export default Input;
