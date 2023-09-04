import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home.jsx";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { Login } from "../pages/Login.jsx";


export const AppRouter = () => {

  const {status, checkToken} = useAuthStore();

  useEffect(() => {
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
}
