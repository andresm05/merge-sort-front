/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";
import { useUser } from "../hooks/useUser";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import { Navbar } from "../components/Navbar";
import { UserCard } from "../components/UserCard";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
  const { users, getUsers, searchUsers, loading, error } = useUser();
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
      <SearchBar searchUsers={searchUsers} getUsers={getUsers}/>
      <div className="row row-cols-sm-1 row-cols-md-4 mt-3">
        {users.map((u) => (
          <UserCard u={u} key={u._id} />
        ))}
      </div>
    </div>
  );
};
