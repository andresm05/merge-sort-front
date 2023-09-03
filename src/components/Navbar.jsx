import { useAuthStore } from "../hooks/useAuthStore";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();

  return (
    <div className="navbar navbar-light bg-light mb-4 px-4">
      <span className="navbar-brand">
        <img
          src={user.img}
          alt={user.name}
          className="img-fluid rounded-circle"
          width="50"
        />
        <span className="navbar-brand ms-4">{user.name}</span>
      </span>

      <button className="btn btn-outline-danger" onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
