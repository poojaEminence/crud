import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddData from "./AddData";

function User() {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    address: "",
  });

  //const [tableData, setTableData] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/event", user).then((response) => {
      console.log(response, "????????");
      navigate("/table");
    });
  };

  return (
    <div>
      <h1>Add</h1>
      <AddData
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
      />
    </div>
  );
}
export default User;
