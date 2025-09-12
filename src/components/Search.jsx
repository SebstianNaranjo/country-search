import PropTypes from "prop-types";
import { useState } from "react";

export const Search = ({ placeholder, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (evento) => {
    setSearch(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    onSearch(search);
    if (search.trim() === "") return;

    onSearch(search);
    setSearch("");
  };

  const handleKeyDown = (evento) => {
    if (evento.key === "Enter") {
      handleSubmit(evento);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="content-center">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
