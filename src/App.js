// module imports
import * as React from 'react'
import styled from 'styled-components'


import Input from './components/input/Input';
import Output from './components/output/output';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f07070;
  width: 500px;
  border-radius: 1rem;
  padding: 5rem;
  .hide{
    display: none;
  }
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

  return (
    <div className='App'>
      <StyledContainer>
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
        {visibility? <Output
          results={results}
          visibility={visibility}
          isLoading={isLoading}
          spanText={spanText}
          outputHeader={outputHeader}
          setOutputHeader={setOutputHeader}
          
        />: null}
        
      </StyledContainer>
    </div>
  );
}

export default App;
