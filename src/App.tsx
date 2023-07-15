import React, { useState } from 'react';

const ArrowButton: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shapeIndices, setShapeIndices] = useState([0, 1, 2, 3, 4, 5]);
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [language, setLanguage] = useState('en'); // เพิ่ม state สำหรับเก็บภาษาปัจจุบัน

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
    // ทำการเปลี่ยนหน้าไปยังหน้าที่ต้องการ
    window.location.href = '/' + page;
  }
  
  // handleLanguageChange

  return (
    
    <div style={{ width: '1000px', height: '300px' }}>
       {/* เพิ่มส่วนเลือกภาษา */}
       <div>
    <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="th">ไทย</option>
    </select>
  </div>
      {/* ส่วนแสดงตาราง */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button style={{ margin: '0 5px', width: '150px' }} onClick={() => goToPage('test1')}>
    {language === 'en' ? 'Test 1 Webpage Management' : 'แบบทดสอบที่1 การจัดการหน้าเว็บ'}
  </button>
  <button style={{ margin: '0 5px', width: '150px' }} onClick={() => goToPage('test2')}>
    {language === 'en' ? 'Test 2 Webpage Management' : 'แบบทดสอบที่2 การจัดการหน้าเว็บ'}
  </button>
  <button style={{ margin: '0 5px', width: '150px' }} onClick={() => goToPage('test3')}>
    {language === 'en' ? 'Test 3 Webpage Management' : 'แบบทดสอบที่3 การจัดการหน้าเว็บ'}
  </button>
</div>

             
      <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
        {['left', 'down', 'up', 'right'].map((direction) => (
          <button
            key={direction}
            className={`direction ${direction}`}
            style={{
              flex: '0 0 33.33%',
              boxSizing: 'border-box',
              padding: '10px',
              textAlign: 'center',
              fontSize: '20px',
            }}
            onClick={() => handleArrowClick(direction)}
          >
            {direction === 'left' && '◀'}
            {direction === 'up' && '▲'}
            {direction === 'down' && '▼'}
            {direction === 'right' && '▶'}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '10px' }}>
        {isGridLayout ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '50px' }}>
            {shapeIndices.map((shapeIndex, index) => (
              <button
                key={index}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
                onClick={handleShapeClick}
              >
                {shapes[shapeIndex]}
              </button>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {shapeIndices.map((shapeIndex, index) => (
              <button
                key={index}
                style={{
                  flex: '0 0 33.33%',
                  boxSizing: 'border-box',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
                onClick={handleShapeClick}
              >
                {shapes[shapeIndex]}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <button style={{ width: '100%', marginTop: '10px' }} onClick={handleResetClick}>
          Reset
        </button>
        <button style={{ width: '100%', marginTop: '10px' }} onClick={handleDirectionClick}>
          {isGridLayout ? 'Switch to Flex Layout' : 'Switch to Grid Layout'}
        </button>
      </div>

     

      <style>
        {`
        .direction {
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
        }
        
        .direction:active,
        .direction:hover {
          background-color: orange;
        }
        
        `}
      </style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Arrow Control</h1>
      <ArrowButton />
    </div>
  );
};

export default App;
