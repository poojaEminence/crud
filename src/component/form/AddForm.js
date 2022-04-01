import { useEffect, useState } from "react";
import Add from "./Add";
import axios from "axios";
//import { useState } from "react";

function AddForm() {
  useEffect(() => {
    tableData();
  }, []);

  const [show, setShow] = useState(false);

  const [editDate, setEditDate] = useState(false);

  const handleClose = () => setShow(false);
  const [formError, setFormError] = useState({});
  const [searchData, setSearchData] = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [dataAll, setDataAll] = useState([]);

  const handleShow = () => {
    setShow(true);
    setEditDate(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setFormError({});
    console.log(userData, "data");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidation(userData)) {
      await axios
        .post("http://localhost:4000/data", userData)
        .then((response) => {
          console.log(response.data, "????????");
          setUserData(response.data);
          handleClose();
        });
      tableData();
      setUserData({});
    }
  };

  const tableData = async () => {
    const result = await axios.get("http://localhost:4000/data");
    console.log(result.data, "data");
    setDataAll(result.data);
  };
  const handleUpdate = async (data) => {
    setEditDate(true);
    setShow(true);
    var res = dataAll.find(function (e) {
      return e.id == data;
    });
    setUserData(res);
  };

  const onHandleEdit = async () => {
    await axios
      .put(`http://localhost:4000/data/${userData.id}`, userData)
      .then((res) => {
        setUserData(res.data);
        setShow(false);
      });
  };
  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/data/${id}`);
    console.log(res);
    tableData();
  };

  const formValidation = (value) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const { name, password, email } = value;
    let formErrors = {};
    let isValid = true;
    if (!name) {
      isValid = false;
      formErrors["name"] = "Please Enter Name";
    } else if (!email) {
      isValid = false;
      formErrors["email"] = "Please Enter Email";
    } else if (!password) {
      isValid = false;
      formErrors["password"] = "Please Enter password";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    if (searchData) {
      let filter = dataAll.filter(
        (us) => us.name.includes(value) || us.email.includes(value)
      );
      setDataAll(filter);
    } else {
      tableData();
    }
    setSearchData(value);
  };

  return (
    <div>
      <Add
        handleClose={handleClose}
        handleShow={handleShow}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
        onHandleEdit={onHandleEdit}
        handelDelete={handelDelete}
        handleSearch={handleSearch}
        searchData={searchData}
        formError={formError}
        editDate={editDate}
        dataAll={dataAll}
        value={userData}
        show={show}
      />
    </div>
  );
}
export default AddForm;
