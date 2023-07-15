import React, { useState } from 'react';

const ArrowButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shapeIndices, setShapeIndices] = useState([0, 1, 2, 3, 4, 5]);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [language, setLanguage] = useState('en');

  const shapes = ['○', '▢', '▲', '△', '◇', '■'];

  const handleArrowClick = (direction: string) => {
    let newX = position.x;
    let newY = position.y;

    switch (direction) {
      case 'up':
        newY -= 10;
        setShapeIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const firstRowIndices = newIndices.slice(0, 3);
          const secondRowIndices = newIndices.slice(3);
          newIndices.splice(0, 3, ...secondRowIndices);
          newIndices.splice(3, 3, ...firstRowIndices);
          return newIndices;
        });
        break;
      case 'down':
        newY += 10;
        setShapeIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const firstRowIndices = newIndices.slice(0, 3);
          const secondRowIndices = newIndices.slice(3);
          newIndices.splice(0, 3, ...secondRowIndices);
          newIndices.splice(3, 3, ...firstRowIndices);
          return newIndices;
        });
        break;
      case 'left':
        newX -= 10;
        setShapeIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const lastShapeIndex = newIndices[5];
          newIndices.splice(5, 1);
          newIndices.splice(0, 0, lastShapeIndex);
          return newIndices;
        });
        break;
      case 'right':
        newX += 10;
        setShapeIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          const firstShapeIndex = newIndices[0];
          newIndices.splice(0, 1);
          newIndices.push(firstShapeIndex);
          return newIndices;
        });
        break;
      default:
        break;
    }

    setPosition({ x: newX, y: newY });
  };

  const handleShapeClick = () => {
    const newIndices = [...shapeIndices];
    newIndices.sort(() => Math.random() - 0.5);
    setShapeIndices(newIndices);
  };

  const handleResetClick = () => {
    setPosition({ x: 0, y: 0 });
    setShapeIndices([0, 1, 2, 3, 4, 5]);
  };

  const handleDirectionClick = () => {
    setIsGridLayout(!isGridLayout);
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  function goToPage(page: string) {
    window.location.href = '/' + page;
  }

  return (
    <div>
      <h1>Arrow Control</h1>
      <button onClick={() => handleArrowClick('up')}>Up</button>
      <button onClick={() => handleArrowClick('down')}>Down</button>
      <button onClick={() => handleArrowClick('left')}>Left</button>
      <button onClick={() => handleArrowClick('right')}>Right</button>
      <button onClick={handleShapeClick}>Shuffle Shapes</button>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleDirectionClick}>Toggle Grid Layout</button>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('th')}>Thai</button>
      <p>Position: {`(${position.x}, ${position.y})`}</p>
      <div className={isGridLayout ? 'grid-layout' : 'list-layout'}>
        {shapeIndices.map((index) => (
          <div key={index} className="shape">
            {shapes[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

const Test1Page: React.FC = () => {
  return (
    <div>
      <h1>Test 1 Webpage Management</h1>
      <ArrowButton />
      <p>Content for part 1</p>
      <p>Content for part 2</p>
      <p>Content for part 3</p>
    </div>
  );
};

export default Test1Page;
