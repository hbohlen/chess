import React from "react";

import Square from "./components/Chessboard/Square/Square";

import "./App.scss";

function App() {
  return (
    <div id="App">
      <Square color={"black"} row={1} column={1} />
    </div>
  );
}

export default App;
