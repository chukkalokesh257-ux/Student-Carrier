import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;