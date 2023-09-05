/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useEffect } from "react";

export const SearchBar = ({ searchUsers, getUsers }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { term = "" } = queryString.parse(location.search);

  useEffect(() => {
    if (term.trim().length > 0) {
      searchUsers(term);
    } else {
      getUsers();
    }
  }, [term]);

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`?term=${e.target.value.toLowerCase()}`);
  };
  return (
    <form className="form-floating mb-3 d-inline-flex" onSubmit={onSearch}>
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="encuentra tu compañero"
        name="searchText"
        required
        onChange={onSearch}
      />
      <label htmlFor="floatingInput">Encuentra tu compañero</label>
    </form>
  );
};
