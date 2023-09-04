/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore.js";
import { useUser } from "../hooks/useUser.js";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { Navbar } from "../components/Navbar.jsx";
import { UserCard } from "../components/UserCard.jsx";
import { SearchBar } from "../components/SearchBar.jsx";

export const Home = () => {
  const { users, getUsers, searchUsers, loading, error, hasUsers } = useUser();
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

  if (loading) {
    return (
      <ReactLoading
        className="container-fluid 
    vh-100 row 
    justify-content-center 
    align-items-center text-center mx-auto"
        type="spin"
        color="blue"
        height={200}
        width={200}
      />
    );
  }

  return (
    <div className="container-fluid">
      <Navbar />
      <SearchBar searchUsers={searchUsers} getUsers={getUsers} />
      <div
        className={`alert alert-danger text-center ${hasUsers ? "d-none" : ""}`}
        role="alert"
      >
        No se encontraron usuarios
      </div>
      <div className="row row-cols-sm-1 row-cols-md-4 mt-3">
        {users.map((u) => (
          <UserCard u={u} key={u._id} />
        ))}
      </div>
    </div>
  );
};
