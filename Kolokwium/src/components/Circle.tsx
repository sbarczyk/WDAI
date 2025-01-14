import React from "react";

interface CircleProps {
  id: number;
  onDelete: (id: number) => void;
  onClick: (id: number) => void;
}

const Circle: React.FC<CircleProps> = ({ id, onDelete, onClick }) => {
  return (
    <div className="shape-wrapper">
      <div className="shape circle" onClick={() => onClick(id)}></div>
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

export default Circle;