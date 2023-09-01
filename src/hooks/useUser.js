import { useState } from 'react';
import { MergeApi } from '../api/MergeApi';

export const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUsers = async () => {
      try {
        const { data } = await MergeApi.get("/users");
        setUsers(data.sortUsers)
      } catch (error) {
        setError(error);
        console.log(error);
        setTimeout(() => {
            setError(null);
            }, 10);
      }
      setLoading(false);
    };

  return {
    users,
    getUsers,
    loading,
    error,
  }
};
