import React from "react";

interface RectangleProps {
  id: number;
  onDelete: (id: number) => void;
  onClick: (id: number) => void;
}

const Rectangle: React.FC<RectangleProps> = ({ id, onDelete, onClick }) => {
  return (
    <div className="shape-wrapper">
      <div className="shape rectangle" onClick={() => onClick(id)}></div>
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

export default Rectangle;