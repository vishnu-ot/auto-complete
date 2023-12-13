import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import SearchList from "./SearchList/SearchList";

function App() {
  const [users, setUsers] = useState();
  const [inputValue, setInputValue] = useState("");

  const getUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");

    setUsers(response.data);
  };

  const inputTextHandler = (e) => {
    setInputValue(e.target.value);
  };

  const closeBtnHandler = () => {
    setInputValue("");
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search your name here"
        onChange={inputTextHandler}
        value={inputValue}
      />{" "}
      {inputValue && (
        <span className="close-button" onClick={closeBtnHandler}>
          X
        </span>
      )}
      {users && <SearchList users={users} inputValue={inputValue} />}
    </div>
  );
}

export default App;
