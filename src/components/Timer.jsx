import { React } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';


const elmenent =<Timer name="Christian" />;
const root = createRoot(document.getElementById('root'));
root.render(elmenent);

function Timer(props){
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {seconds}s
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={() => setSeconds(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}






export default Timer







/*
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'

function App1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App1
*/