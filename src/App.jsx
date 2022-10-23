import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const LeftBall = useRef();
  const RightBall = useRef();

  useEffect(() => {
    if (LeftBall && LeftBall.current && RightBall && RightBall.current) {
      window.addEventListener('mousemove', (e) => {
        const midX = window.innerWidth / 2;
        const midY = window.innerHeight / 2;

        const X = e.clientX - midX;
        const Y = midY - e.clientY;

        LeftBall.current.style.top = 50 - (Y / midY) * 50 + '%';
        LeftBall.current.style.left = 50 + (X / midX) * 50 + '%';
        RightBall.current.style.top = 50 - (Y / midY) * 50 + '%';
        RightBall.current.style.left = 50 + (X / midX) * 50 + '%';
      });
    }
  }, []);

  return (
    <div className='App'>
      <div className='eye-wrapper'>
        <div className='eye-left' id='left'>
          <div className='ball-left' ref={LeftBall}></div>
        </div>
        <div className='eye-right' id='right'>
          <div className='ball-right' ref={RightBall}></div>
        </div>
      </div>
      <h1>
        Full Code:{' '}
        <a href='https://github.com/bdbose/mouse-tracker-eye'>Click Here!</a>
      </h1>
    </div>
  );
}

export default App;
