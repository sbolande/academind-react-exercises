import React, { useCallback, useState, useMemo } from 'react';

// import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // console.log('APP RUNNING');
  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // }, [allowToggle]);
  // const allowToggleHandler = () => { setAllowToggle(true); };
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {/* <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button> */}
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
