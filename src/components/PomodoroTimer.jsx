import React, { useState, useEffect } from 'react';
import { Pause, Play, RotateCcw, Plus, Minus } from 'lucide-react';

const PomodoroTimer = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const adjustTime = (type, amount) => {
    if (type === 'session') {
      const newLength = sessionLength + amount;
      if (newLength > 0 && newLength <= 60) {
        setSessionLength(newLength);
        if (!isRunning) setTimeLeft(newLength * 60);
      }
    } else {
      const newLength = breakLength + amount;
      if (newLength > 0 && newLength <= 60) {
        setBreakLength(newLength);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-cursive text-pink-400 mb-8">Pomodoro Timer</h1>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between mb-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Break Length</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => adjustTime('break', -1)}
                className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500"
              >
                <Minus size={20} />
              </button>
              <span className="text-2xl text-pink-500 w-8 text-center">{breakLength}</span>
              <button 
                onClick={() => adjustTime('break', 1)}
                className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-2">Session Length</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => adjustTime('session', -1)}
                className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500"
              >
                <Minus size={20} />
              </button>
              <span className="text-2xl text-pink-500 w-8 text-center">{sessionLength}</span>
              <button 
                onClick={() => adjustTime('session', 1)}
                className="w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-48 h-48 mx-auto border-8 border-pink-200 rounded-full flex items-center justify-center mb-8">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 100 100" fill="none">
                {/* Cuerpo del tomate */}
                <circle cx="50" cy="55" r="40" fill="#FF6B6B"/>
                {/* Tallo */}
                <path d="M50 15 Q45 25 50 30 Q55 25 50 15" fill="#4CAF50"/>
                <path d="M45 20 Q40 15 35 20" fill="#4CAF50"/>
                {/* Cara kawaii */}
                <circle cx="35" cy="50" r="4" fill="#555"/>
                <circle cx="65" cy="50" r="4" fill="#555"/>
                <path d="M40 65 Q50 70 60 65" stroke="#555" strokeWidth="3" strokeLinecap="round" fill="none"/>
                {/* Rubor en las mejillas */}
                <circle cx="25" cy="60" r="5" fill="#FF9999" opacity="0.5"/>
                <circle cx="75" cy="60" r="5" fill="#FF9999" opacity="0.5"/>
              </svg>
              <span className="text-4xl font-bold text-gray-800">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-2 bg-pink-100 hover:bg-pink-200 text-pink-500 rounded-full flex items-center gap-2"
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
            {isRunning ? 'STOP' : 'START'}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTimeLeft(sessionLength * 60);
            }}
            className="px-6 py-2 bg-pink-100 hover:bg-pink-200 text-pink-500 rounded-full flex items-center gap-2"
          >
            <RotateCcw size={20} />
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;