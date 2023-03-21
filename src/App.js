import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from './pages/CartPage/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
