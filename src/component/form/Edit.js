import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddData from "./AddData";

function Page1() {
  let { id } = useParams();

  useEffect(() => {
    getEditData();
  }, []);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getEditData = async () => {
    await axios.get(`http://localhost:4000/event/${id}`).then((res) => {
      setUser(res.data);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/event/${id}`, user).then((res) => {
      setUser(res);
      navigate("/table");
    });
  };

  return (
    <div>
      <h1>Edit</h1>

      <AddData
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        editData={true}
      />
    </div>
  );
}
export default Page1;
