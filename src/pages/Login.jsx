import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const Login = () => {
  const { startLogin, error } = useAuthStore();

  const handleLogin = ({ credential }) => {
    console.log(credential);
    startLogin({ credential });
  };

  const handleLoginError = () => {
    console.log("Error");
  };

  useEffect(() => {
    if (error !== undefined) {
      Swal.fire("Error en la autenticacion", error, "error");
    }
  }, [error]);

  return (
    <div
      className="container-fluid 
    vh-100 row 
    justify-content-center 
    align-items-center
    bg-black
    "
    >
      <div className="col-12 text-center text-white">
        <h1>Iniciar Sesión</h1>
        <div className="d-flex justify-content-center mt-3">
        <GoogleLogin
            onSuccess={handleLogin}
            onError={handleLoginError}/>
        </div>
      </div>
    </div>
  );
};
