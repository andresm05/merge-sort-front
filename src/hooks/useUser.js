import { useState } from "react";
import { MergeApi } from "../api/MergeApi";

export const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasUsers, setHasUsers] = useState(true);

  const getUsers = async () => {
    try {
      const { data } = await MergeApi.get("/users");
      setUsers(data.sortUsers);
      setHasUsers(true);
    } catch (error) {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError(null);
      }, 10);
    }
    setLoading(false);
  };

  const searchUsers = async (term) => {
    try {
      const { data } = await MergeApi.get('/search', {
        params: {
          term,
        },
      });
      setUsers(data.results);
      if(data.results.length === 0){
        setHasUsers(false);
      }else{
        setHasUsers(true);
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 10);
    }
    setLoading(false);
  };

  return {
    users,
    setUsers,
    getUsers,
    searchUsers,
    loading,
    hasUsers,
    error,
  };
};
