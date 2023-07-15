// components/ButtonShape.tsx

import React from 'react';
import { Button } from 'antd';
// import './ButtonShape.scss'; // Import SCSS if using SCSS

const ButtonShape: React.FC = () => {
  const handleMoveShape = () => {
    
    // Logic for moving shape to the left
  };

  return (
    <Button className="shape-button" onClick={handleMoveShape}>
      Move Shape
    </Button>
  );
};

export default ButtonShape;
