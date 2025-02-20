import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Layout from "./pages/Layout";
import DriverPage from "./components/DriverPage";
import ConductorPage from "./components/ConductorPage";
import {  useState } from "react";
import RefraceHandler from "./RefraceHandler";
import ShortReport from "./components/ShortReport";
import AdvanceReport from "./components/AdvanceReport";



function App() {
  const [isAuth, setIsAuth] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuth ? element: <Navigate to="/login" />
  }

  return (
    <>
      <RefraceHandler setIsAuth={setIsAuth}  />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute element={<Home />} />} />
          <Route path="about" element={<PrivateRoute element={<About />} />} />
          <Route
            path="contact"
            element={<PrivateRoute element={<Contact />} />}
          />
          <Route
            path="services"
            element={<PrivateRoute element={<Service />} />}
          />
          <Route
            path="driver"
            element={<PrivateRoute element={<DriverPage />} />}
          />
          <Route
            path="conductor"
            element={<PrivateRoute element={<ConductorPage />} />}
          />
          <Route
            path="ShortReport"
            element={<PrivateRoute element={<ShortReport />} />}
          />
          <Route
            path="AdvanceReport"
            element={<PrivateRoute element={<AdvanceReport />} />}
          />
        
        </Route>
      </Routes>
    </>
  );
}

export default App
