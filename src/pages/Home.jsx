/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";
import { useUser } from "../hooks/useUser";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";

export const Home = () => {
  const { startLogout } = useAuthStore();
  const { users, getUsers, loading, error } = useUser();
  const { user } = useAuthStore();

  useEffect(() => {
    getUsers();
    console.log(user);
  }, []);

  useEffect(() => {
    if (error != null) {
      Swal.fire("Error", error, "error");
    }
  }, [error]);

  const handleLogout = () => {
    startLogout();
  };

  if (loading) {
    return <ReactLoading type="spin" color="blue" height={667} width={375} />;
  }

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="rounded-circle" src={user.img} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item active ms-4">{user.name}</li>
            <li className="nav-item">
              <input
                type="button"
                className="btn btn-outline-primary mt-3 mb-3"
                value="Logout"
                onClick={handleLogout}
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className="row row-cols-sm-1 row-cols-md-4">
        {users.map((user) => (
          <div className="card m-1 bg-light" key={user._id}>
            <div className="text-center">
              <img
                src={user.img}
                className="img-fluid rounded-circle"
                alt={user.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
