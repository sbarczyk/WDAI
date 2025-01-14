import React from "react";

interface SquareProps {
  id: number;
  onDelete: (id: number) => void;
  onClick: (id: number) => void;
}

const Square: React.FC<SquareProps> = ({ id, onDelete, onClick }) => {
  return (
    <div className="shape-wrapper">
      <div className="shape square" onClick={() => onClick(id)}></div>
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        Usuń
      </button>
    </div>
  );
};

export default Square;