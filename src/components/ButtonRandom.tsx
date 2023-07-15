// components/ButtonRandom.tsx

import React from 'react';
import { Button } from 'antd';
// import './ButtonRandom.scss'; // Import SCSS if using SCSS

const ButtonRandom: React.FC = () => {
  const handleRandomPosition = () => {
    // Logic for generating random position
  };

  return (
    <Button className="random-button" onClick={handleRandomPosition}>
      Random Position
    </Button>
  );
};

export default ButtonRandom;
