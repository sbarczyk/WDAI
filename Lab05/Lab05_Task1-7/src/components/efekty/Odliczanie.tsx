import React, { useState, useEffect } from "react";

const Odliczanie: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(15);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | null = null;

    if (isRunning && countdown > 0) {
      interval = window.setInterval(() => {
        setCountdown((prev) => Math.max(0, prev - 0.1));
      }, 100);
    } else if (countdown <= 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isRunning, countdown]);

  const handleButtonClick = () => {
    if (countdown <= 0) return;
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="centered-container">
      <h2>Odliczanie</h2>
      <div style={timerStyle}>{countdown.toFixed(1)} sek</div>
      <button
        onClick={handleButtonClick}
        disabled={countdown <= 0}
        style={{
          ...buttonStyle,
          backgroundColor: countdown <= 0 ? "#ccc" : "#007bff",
          cursor: countdown <= 0 ? "not-allowed" : "pointer",
        }}
      >
        {countdown <= 0
          ? "Odliczanie zakończone"
          : isRunning
          ? "STOP"
          : "START"}
      </button>
    </div>
  );
};

const timerStyle: React.CSSProperties = {
  fontSize: "24px",
  margin: "20px 0",
  fontWeight: "bold",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
};

export default Odliczanie;
