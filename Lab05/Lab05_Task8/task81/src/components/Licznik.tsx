import React, { useState, useEffect } from "react";

const Licznik: React.FC = () => {

  const [counter, setCounter] = useState<number>(() => {
    const savedValue = localStorage.getItem("counter");
    return savedValue ? parseInt(savedValue) : 0;
  });


  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);


  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Licznik</h1>
        <p style={counterStyle}>{counter}</p>
        <div style={buttonContainerStyle}>
          <button onClick={increment} style={buttonStyle}>
            Dodaj
          </button>
          <button onClick={decrement} style={buttonStyle}>
            Odejmij
          </button>
        </div>
      </div>
    </div>
  );
};


const outerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  margin: 0, 
  backgroundColor: "#121212",
  position: "absolute",
  top: 0,
  left: 0,
};

const containerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "30px",
  borderRadius: "15px",
  backgroundColor: "#1f1f1f",
  color: "#ffffff",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
  width: "320px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#ffffff",
};

const counterStyle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#5ba7ff",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
};

const buttonStyle: React.CSSProperties = {
  flex: 1,
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#1e88e5",
  color: "#ffffff",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default Licznik;
