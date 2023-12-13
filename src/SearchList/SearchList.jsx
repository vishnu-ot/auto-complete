import React from "react";
import "./SearchList.css";
function SearchList({ users, inputValue }) {
  const filteredList = users.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="search-list" style={{ textAlign: "center" }}>
      {filteredList?.map((user) => {
        return <h3>{user.name}</h3>;
      })}
    </div>
  );
}

export default SearchList;
