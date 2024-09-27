import React from "react";
import { createPortal } from "react-dom";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      <h1>React Tooltip with Portal</h1>
      <Tooltip text="This tooltip is rendered via portal!">
        <button>Hover me</button>
      </Tooltip>
      {/* another example */}
      {createPortal(<h1>I am from create portal</h1>, document.getElementById('root') )}
    </div>
  );
}

export default App;
