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
      <div className="col-sm-2 col-md-6">
        <div className="row border boder-2 border-white rounded g-0">
          <div className="col-sm-6 col-md-6 text-center">
            <img
              src="../estructura.jpg"
              alt="logo"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-sm-6 col-md-6 text-center text-white d-flex flex-column justify-content-center">
            <h5 className="text-muted m-1"><strong>Conoce a tus compañeros de clase</strong></h5>
            <span className="text-muted">Iniciar sesion</span>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <GoogleLogin onSuccess={handleLogin} onError={handleLoginError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
