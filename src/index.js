import React from "react";
import ReactDOM from "react-dom";

// import UnoptimizedSelect from "./UnoptimizedSelect";
import OptimizedSelect from "./OptimizedSelect";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h5>Unoptimized Select</h5> */}
      {/* <UnoptimizedSelect /> */}
      {/* <br /> */}
      <h5>Optimized Select</h5>
      <OptimizedSelect />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
