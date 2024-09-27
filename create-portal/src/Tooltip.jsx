import React, { useState, useRef} from 'react'

import TooltipPortal from './ToolTipPortal'

const Tooltip = ({ children, text }) => {
    const [show, setShow] = useState(false);
    const targetRef = useRef(null);
  
    return (
      <div
        ref={targetRef}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ display: 'inline-block', position: 'relative' }}
      >
        {children}
        {show && <TooltipPortal text={text} targetRef={targetRef} />}
      </div>
    );
  };

  export default Tooltip;