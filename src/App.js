import { Route, Routes } from "react-router-dom";

import "./App.css";
import Authorization from "./pages/Authorization/Authorizaation";
import Cart from "./pages/CartPage/Cart";
import Registration from "./pages/RegistrationPage/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </div>
  );
}

export default App;
