// module imports
import * as React from 'react';
import styled from 'styled-components';
import * as Icons from '@material-ui/icons';
import * as MUI from '@material-ui/core';

import Input from './components/input/Input';
import Output from './components/output/output';
import SettingsModal from './components/settingModal/SettingsModal';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f07070;
  width: 600px;
  border-radius: 1rem;
  padding: 5rem;
  position: relative;
  .hide {
    display: none;
  }
`;

const StyledCogIcon = styled(Icons.Settings)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: rgba(0, 0, 0, 0.291);
  font-size: 3rem !important;
  cursor: pointer;
`;

function App() {
  // !exp States
  const [word, setWord] = React.useState('');
  const [maxItems, setMaxItems] = React.useState(10);
  const [results, setResults] = React.useState([]);
  const [visibility, setVisibility] = React.useState(false);
  const [spanText, setSpanText] = React.useState('');
  const [outputHeader, setOutputHeader] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const [voiceChoice, setVoiceChoice] = React.useState({});
  const [voicesSet, setVoicesSet] = React.useState([]);

  React.useEffect(() => {
    const synth = window.speechSynthesis;

    const getVoices = () => {
      setTimeout(() => {
        const voices = synth.getVoices();

        const engVoices = voices.filter(voice => {
          return voice.lang.includes('en');
        });

        setVoicesSet(engVoices);
      }, 10);
    };

    getVoices();
  }, []);

  React.useEffect(() => {}, []);

  const iconClickHandler = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className='App'>
      <StyledContainer>
        <StyledCogIcon onClick={iconClickHandler} />
        <MUI.Dialog
          open={isSettingsOpen}
          onClose={iconClickHandler}
          fullWidth={true}
        >
          <SettingsModal
            voicesSet={voicesSet}
            voiceChoice={voiceChoice}
            setVoiceChoice={setVoiceChoice}
          />
        </MUI.Dialog>
        <Input
          word={word}
          setWord={setWord}
          maxItems={maxItems}
          setMaxItems={setMaxItems}
          visibility={visibility}
          setVisibility={setVisibility}
          spanText={spanText}
          setSpanText={setSpanText}
          results={results}
          setResults={setResults}
          setIsLoading={setIsLoading}
        />
        {visibility ? (
          <Output
            results={results}
            visibility={visibility}
            isLoading={isLoading}
            spanText={spanText}
            outputHeader={outputHeader}
            setOutputHeader={setOutputHeader}
            voiceChoice={voiceChoice}
            voicesSet={voicesSet}
          />
        ) : null}
      </StyledContainer>
    </div>
  );
}

export default App;
