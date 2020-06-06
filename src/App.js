import React from "react";
import NavTab from "./components/NavTab";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="headerBanner">
        <NavTab name="Let's Keep Count" />
      </ul>

      <Counter />
    </div>
  );
}

export default App;
