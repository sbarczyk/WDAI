import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Square from "../components/Square";
import Rectangle from "../components/Rectangle";
import Circle from "../components/Circle";

type ShapeType = "square" | "rectangle" | "circle";

interface Shape {
  id: number;
  type: ShapeType;
}

const HomePage: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([
    { id: 1, type: "square" },
    { id: 2, type: "rectangle" },
    { id: 3, type: "circle" },
  ]);
  const [filter, setFilter] = useState<ShapeType | "all">("all");
  const [counter, setCounter] = useState(4);
  const navigate = useNavigate();

  const addShape = (type: ShapeType) => {
    setShapes([...shapes, { id: counter, type }]);
    setCounter(counter + 1);
  };

  const deleteShape = (id: number) => {
    setShapes(shapes.filter((shape) => shape.id !== id));
  };

  const navigateToDetails = (shape: Shape) => {
    navigate(`/shape/${shape.id}`, { state: shape });
  };

  useEffect(() => {

    const timer = setTimeout(() => {
      document.querySelectorAll(".shape").forEach((el) => {
        el.classList.add("shrink");
      });


      setTimeout(() => {
        document.querySelectorAll(".shape").forEach((el) => {
          el.classList.remove("shrink");
        });
      }, 2000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredShapes =
    filter === "all"
      ? shapes
      : shapes.filter((shape) => shape.type === filter);

  return (
    <div>
      <h1>Lista kształtów</h1>
      <div>
        <button onClick={() => addShape("square")}>Dodaj kwadrat</button>
        <button onClick={() => addShape("rectangle")}>Dodaj prostokąt</button>
        <button onClick={() => addShape("circle")}>Dodaj koło</button>
      </div>
      <div>
        <select onChange={(e) => setFilter(e.target.value as ShapeType | "all")}>
          <option value="all">Wszystkie</option>
          <option value="square">Kwadraty</option>
          <option value="rectangle">Prostokąty</option>
          <option value="circle">Koła</option>
        </select>
      </div>
      <div className="shape-list">
        {filteredShapes.map((shape) => {
          const props = {
            id: shape.id,
            onDelete: deleteShape,
            onClick: () => navigateToDetails(shape),
          };
          switch (shape.type) {
            case "square":
              return <Square key={shape.id} {...props} />;
            case "rectangle":
              return <Rectangle key={shape.id} {...props} />;
            case "circle":
              return <Circle key={shape.id} {...props} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;