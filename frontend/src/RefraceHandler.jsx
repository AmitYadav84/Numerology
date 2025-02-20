import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefraceHandler = ({ setIsAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);

      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/", { replace: true }); // Redirect immediately
      }
    } else {
      setIsAuth(false);

      if (location.pathname !== "/login" && location.pathname !== "/register") {
        navigate("/login", { replace: true }); // Redirect to login if unauthenticated
      }
    }
  }, [setIsAuth, location.pathname, navigate]);

  return null;
};

export default RefraceHandler;
