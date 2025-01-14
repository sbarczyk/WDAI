import React from "react";
import { useLocation, useParams } from "react-router-dom";

interface Shape {
  id: number;
  type: "square" | "rectangle" | "circle";
}

const ShapeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const shape = location.state as Shape;

  if (!shape) {
    return <p>Brak danych o kształcie.</p>;
  }

  return (
    <div>
      <h1>Shape Details</h1>
      <p>ID: {id}</p>
      <p>Type: {shape.type}</p>
      <div
        className={`shape ${shape.type}`}
        style={{
          margin: "20px auto",
        }}
      ></div>
    </div>
  );
};

export default ShapeDetails;