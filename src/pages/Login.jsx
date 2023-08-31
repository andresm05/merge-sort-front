import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const Login = () => {
  const {startLogin, error } = useAuthStore();

  const handleLogin = ({credential}) => {
    console.log(credential);
    startLogin({credential});
    };

  const handleLoginError = () => {
    console.log("Error");
  };

  useEffect(() => {
    if(error !== undefined){
      Swal.fire('Error en la autenticacion', error, 'error');
    }
  }, [error]);

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
      onSuccess={handleLogin}
      onError={handleLoginError}
      />
      
    </div>
  );
};
