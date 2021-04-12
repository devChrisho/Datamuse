import styled from 'styled-components';
import * as React from 'react';
import * as Icons from '@material-ui/icons';

const StyledContainer = styled.div`
  position: relative;
  padding: 2rem;
  h2 {
    margin: 1rem;
  }
  div {
    margin-top: 2rem;
    label {
      font-size: 1.6rem;
    }
  }
`;

const StyledCloseIcon = styled(Icons.Close)`
  color: red;
  top: 2rem;
  right: 2rem;
  position: absolute;
  font-weight: 900 !important;
  font-size: 3rem !important;
  cursor: pointer;
`;

const SettingsModal = ({
  voicesSet,
  voiceChoice,
  setVoiceChoice,
  setIsSettingsOpen,
}) => {
  const voiceList = voicesSet.map((voice, key) => {
    return (
      <option value={voice.name} key={key}>
        {voice.name}
      </option>
    );
  });

  const selectHandler = e => {
    const selection = e.target.value;
    const selectedVoice = voicesSet.filter(voice => {
      return voice.name === selection;
    });

    setVoiceChoice(selectedVoice[0]);
  };

  const closeClickHandler = () => {
    setIsSettingsOpen(false);
  };

  return (
    <StyledContainer>
      <StyledCloseIcon onClick={closeClickHandler} />
      <h2>Settings</h2>
      <hr />
      <div>
        <label htmlFor='voiceChoice'>Choose a voice: </label>
        <select name='voiceChoice' onChange={selectHandler}>
          {voiceList}
        </select>
      </div>
    </StyledContainer>
  );
};

export default SettingsModal;
