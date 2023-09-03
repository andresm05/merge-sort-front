/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useEffect, useState } from "react";

export const SearchBar = ({searchUsers, getUsers}) => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { term = '' } = queryString.parse(location.search);

//   const { searchTex, onInputChange } = useForm({ searchTex: term });

  useEffect(() => {
    if (term.trim().length > 0) {
        searchUsers(term);
    }
    if(searchText.trim().length == 0){
        getUsers();
    }
    }, [term, searchText]);

    const onSearch = (e) => {
        setSearchText(e.target.value);
        navigate(`?term=${e.target.value}`);
    }
  return (
    <form className="form-floating mb-3 d-inline-flex">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="encuentra tu compañero"
        name="searchText"
        onChange={onSearch}
      />
      <label htmlFor="floatingInput">Encuentra tu compañero</label>
    </form>
  );
};
