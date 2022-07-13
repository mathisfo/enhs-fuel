import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RefillInput from "./feature/input/RefillInput";
import Header from "./feature/header/Header";
import HistoryTable from "./feature/history/HistoryTable";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <RefillInput />
      <HistoryTable />
    </div>
  );
}

export default App;
