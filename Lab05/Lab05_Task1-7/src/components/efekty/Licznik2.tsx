import React, { useState, useEffect } from "react";

const Licznik2: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log(`Licznik zwiększył się do ${count}`);
    }
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="centered-container">
      <h2>Licznik</h2>
      <div>Stan licznika: {count}</div>
      <button onClick={increment}>Dodaj</button>
    </div>
  );
};

export default Licznik2;
