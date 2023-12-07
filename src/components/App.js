import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  // State to track the selected shape
  const [selectedShape, setSelectedShape] = useState('Square');

  // State to track the list of shapes added
  const [shapes, setShapes] = useState([]);

  // Function to handle shape selection change
  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  // Function to handle adding a shape
  const handleAddShape = () => {
    // Generate a unique identifier for the shape
    const shapeId = `shape_${shapes.length + 1}`;

    // Create a new shape object
    const newShape = {
      id: shapeId,
      type: selectedShape,
    };

    // Update the list of shapes
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  return (
    <div>
      <div id="shape-creator">
        {/* Select element for shape selection */}
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>

        {/* Button to add a shape */}
        <button onClick={handleAddShape}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {/* Render the shapes */}
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type.toLowerCase()}>{shape.type} {shape.id}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
