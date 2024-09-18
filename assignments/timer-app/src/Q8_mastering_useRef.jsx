import React, { useState, useRef, useEffect } from 'react';

export const Timer = () => {
  // State and refs
  const [duration, setDuration] = useState(60); // Default duration in seconds
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const progressBarRef = useRef(null);
  const backgroundRef = useRef(null);
  const notificationRef = useRef(null);

  // Start timer
  const startTimer = () => {
    if (isRunning || remainingTime <= 0) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Pause timer
  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setRemainingTime(duration);
  };

  // Update progress bar and background color
  useEffect(() => {
    if (progressBarRef.current) {
      const percentage = (remainingTime / duration) * 100;
      progressBarRef.current.style.width = `${percentage}%`;
    }
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundColor = remainingTime <= 10 ? 'red' : 'lightblue';
    }
    if (remainingTime <= 0 && notificationRef.current) {
      notificationRef.current.innerText = 'Time is up!';
    }
  }, [remainingTime, duration]);

  // Handle input change
  const handleInputChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    if (!isNaN(newDuration)) {
      setDuration(newDuration);
      setRemainingTime(newDuration); // Reset timer to new duration
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <input
          type="number"
          value={duration}
          onChange={handleInputChange}
          min="1"
          placeholder="Set duration (seconds)"
        />
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <div
          ref={backgroundRef}
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: 'lightblue',
            position: 'relative',
            margin: '10px 0',
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              height: '100%',
              backgroundColor: 'blue',
              transition: 'width 0.5s',
            }}
          />
        </div>
        <p>Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p>
        <p ref={notificationRef}></p>
      </div>
    </div>
  );
};


