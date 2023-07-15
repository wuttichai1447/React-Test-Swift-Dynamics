// components/ButtonPosition.tsx

import React from 'react';
import { Button } from 'antd';
// import './ButtonPosition.scss'; // Import SCSS if using SCSS

const ButtonPosition: React.FC = () => {
  const handleMovePosition = () => {
    // Logic for toggling grid layout
  };

  return (
    <Button className="position-button" onClick={handleMovePosition}>
      Move Position
    </Button>
  );
};

export default ButtonPosition;
