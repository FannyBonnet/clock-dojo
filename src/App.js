import React from 'react';
import './style.css';
import TimerComponent from './TimerComponent';

export default function App() {
  const [isStart, setIsStart] = React.useState(true);
  return (
    <div className="App">
      <h1>Welcome</h1>
      {isStart && <TimerComponent />}
      <button onClick={() => setIsStart((prevState) => !prevState)}>
        {isStart ? `Stop Timer` : 'Start Timer'}
      </button>
    </div>
  );
}
