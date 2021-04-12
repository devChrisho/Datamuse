import styled from 'styled-components';
import * as MUI from '@material-ui/core';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import axios from 'axios';

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
  const definition = result.data;
  console.log(`This is the definition obj`)
  console.log(definition[0]);
};

const Output = ({
  results,
  visibility,
  isLoading,
  spanText,
  outputHeader,
  setOutputHeader,
  voiceChoice,
  voicesSet
  
}) => {
  const synth = window.speechSynthesis;

  const spanClickHandler = e => {
    
    let utterThis = new SpeechSynthesisUtterance(e.target.innerText);
    console.log(voiceChoice)
    // console.log(voicesSet)
    
    utterThis.voice = voiceChoice
    synth.speak(utterThis);
  };

  let resultsList;
  // !exp mapper
  if (results.length !== 0) {
    resultsList = results.map((item, key) => {
      return (
        <StyledLi key={key}>
          <Tooltip
            title={item.word}
            touchHold='true'
            onShow={() => tooltipHandler(item)}
            animation='perspective'
          >
            <span onClick={spanClickHandler}>{item.word}</span>
          </Tooltip>{' '}
          ({item.numSyllables} syll.)
        </StyledLi>
      );
    });
    setOutputHeader('');
  }

  return (
    <StyledOutput>
      {isLoading ? (
        <StyledLoader />
      ) : (
        <>
          <h2>
            {results.length !== 0 ? (
              <>
                Words that rhyme with <span>{spanText}</span>
              </>
            ) : (
              <>
                <span>{spanText}</span> not found.
                <br /> Try another word.
              </>
            )}
          </h2>
          <ol>{resultsList}</ol>
        </>
      )}
    </StyledOutput>
  );
};

export default Output;
