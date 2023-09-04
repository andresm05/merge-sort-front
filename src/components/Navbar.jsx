import { useAuthStore } from "../hooks/useAuthStore";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();

  return (
    <div className="navbar navbar-light navbar bg-light mb-4 px-4 overflow-auto">
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
        <span>Salir</span>
      </button>
    </div>
  );
};
