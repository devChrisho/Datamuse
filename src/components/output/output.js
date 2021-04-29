import styled from 'styled-components';
import * as MUI from '@material-ui/core';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import axios from 'axios';
import * as React from 'react';

const StyledOutput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: inset 5px 5px 8px rgba(0, 0, 0, 0.263),
    inset -3px -3px 10px rgba(255, 255, 255, 0.201);
  width: 100%;
  max-height: 370px;
  margin-top: 2rem;
  background-color: slategray;
  border: 1 px solid darkblue;
  color: white;
  padding: 3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  overflow-y: auto;

  h2 {
    margin-bottom: auto;
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
  span {
    cursor: pointer;
  }
`;

const StyledLoader = styled(MUI.CircularProgress)``;

const api = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

const tooltipHandler = async item => {
  const endpoint = api + item.word;
  const result = await axios(endpoint);
  // definition obj
  const definition = result.data[0];
  return definition;
};

const Output = ({
  results,
  visibility,
  isLoading,
  spanText,
  outputHeader,
  setOutputHeader,
  voiceChoice,
  voicesSet,
  word,
}) => {
  const synth = window.speechSynthesis;

  const spanClickHandler = e => {
    let utterThis = new SpeechSynthesisUtterance(e.target.innerText);
    if (voiceChoice) {
      utterThis.voice = voiceChoice;
    }
    synth.speak(utterThis);
  };

  // !exp mapper
  const [resultsList, setResultsList] = React.useState([]);
  React.useEffect(async () => {
    const list = await results.map(async (item, key) => {
      // const definition = await tooltipHandler(item);
      // console.log(definition);
      return (
        <StyledLi key={key}>
          <Tooltip title={item.word} touchHold='true' animation='perspective'>
            <span onClick={spanClickHandler}>{item.word}</span>
          </Tooltip>{' '}
          ({item.numSyllables} syll.)
        </StyledLi>
      );
    });
    setResultsList(list);
  }, [results]);

  return (
    <StyledOutput>
      <h2>
        {results?.length !== 0 ? (
          <>
            Words that rhyme with <span>{word}</span>
          </>
        ) : (
          <>
            <span>{spanText}</span> not found.
            <br /> Try another word.
          </>
        )}
      </h2>
      <ol>{resultsList}</ol>
    </StyledOutput>
  );
};

export default Output;
