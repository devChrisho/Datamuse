// module imports
import * as React from 'react'

import Input from './components/input/Input';
import Output from './components/output/output';

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
      <Input
        word={word}
        setWord={setWord}
        maxItems = {maxItems}
        setMaxItems={setMaxItems}
        visibility={visibility}
        setVisibility={setVisibility}
        spanText={spanText}
        setSpanText={setSpanText}
      />
      {/* <Output
        results={results}
        visibility={visibility}
        isLoading={isLoading}
        spanText={spanText}
      /> */}
    </div>
  );
}

export default App;
