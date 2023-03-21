import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/CartPage/Cart";
import Registration from "./pages/RegistrationPage/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
