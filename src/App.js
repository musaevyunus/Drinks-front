import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  const token = useSelector((state) => state.users.token);

  return (
    <div className="App">
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
