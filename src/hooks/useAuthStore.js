import { useDispatch, useSelector } from "react-redux";
import { clearError, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { MergeApi } from "../api/MergeApi";
import Swal from "sweetalert2";

export const useAuthStore = () => {
  const { status, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({credential}) => {
    dispatch(onChecking());
    try{
    const {data} = await MergeApi.post('/auth/google', {token: credential});
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    console.log(data);
    dispatch(onLogin({name: data.name, email: data.email, img: data.img}));
    }catch(error){
      dispatch(onLogout(error.response.data.msg));
      setTimeout(() => {
        dispatch(clearError());
      }, 10);
    }
    };

    const startLogout = () => {
        dispatch(onLogout());
    };


    const checkToken = async() => {

      const token = localStorage.getItem('token');
      if(!token){
        return dispatch(onLogout());
      }
      try{

        const {data} = await MergeApi.get('/auth/renew');
        console.log(data.token);
        localStorage.setItem("token", data.token);
        dispatch(onLogin({name: data.name, email: data.email, img: data.img}));


      }catch(error){
        localStorage.clear();
        dispatch(onLogout());
        Swal.fire('Error', error.response.data.msg, 'error');

    }
  }



  return {
    status,
    user,
    error,
    startLogin,
    startLogout,
    checkToken,
  }
};
