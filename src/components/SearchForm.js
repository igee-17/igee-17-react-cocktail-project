import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchInput } = useGlobalContext();
  const searchInput = React.useRef("");

  React.useEffect(() => {
    searchInput.current.focus();
  }, []);

  const searchItem = () => {
    setSearchInput(searchInput.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search cocktails</label>
          <input
            type="text"
            id="name"
            ref={searchInput}
            onChange={searchItem}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
