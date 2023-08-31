import { useState } from 'react';
import { MergeApi } from '../api/MergeApi';
import { mergeSort } from '../utils/mergeSort';

export const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUsers = async () => {
      try {
        const { data } = await MergeApi.get("/users");
        setUsers(mergeSort(data.users));
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
