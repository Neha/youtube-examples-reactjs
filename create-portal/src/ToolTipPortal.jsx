import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const TooltipPortal = ({ text, targetRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + rect.height,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, [targetRef]);

  return ReactDOM.createPortal(
    <div style={{ ...tooltipStyle, top: position.top, left: position.left }}>
      {text}
    </div>,
    document.body 
  );
};

export default TooltipPortal;



const tooltipStyle = {
  position: 'absolute',
  backgroundColor: 'black',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
  fontSize: '12px',
  transform: 'translateX(-50%)',
  zIndex: 9999,
};
