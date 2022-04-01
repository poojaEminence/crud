import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import axios from "axios";

function Parent() {
  useEffect(() => {
    getData();
  }, []);

  const [tableData, setTableData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/event");
    console.log(res.data, "pppppplllllllll");
    setTableData(res.data);
  };
  const handelDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4000/event/${id}`);
    console.log(res.data, ";lllllllllllll");
    getData();
  };
  return (
    <>
      <ShowData tableData={tableData} handelDelete={handelDelete} />
    </>
  );
}
export default Parent;
