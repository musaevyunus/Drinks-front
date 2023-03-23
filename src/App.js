import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Authorization from "./pages/Authorization/Authorizaation";
import Cart from "./pages/CartPage/Cart";
import Registration from "./pages/RegistrationPage/Registration";

function App() {
  const token = useSelector((state) => state.users.token);

  return (
    <div className="App">
      {token ? (
        <Routes>
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/registration" element={<Navigate to={"/cart/2"} />} />
          <Route path="/authorization" element={<Navigate to={"/cart/2"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
