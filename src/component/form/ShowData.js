import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShowData(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>ShowData</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>address</th>
          </tr>
        </thead>
        {props.tableData.map((data, i) => (
          <tbody>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.lastname}</td>
              <td>{data.address}</td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate(`/edit/${data.id}`)}
                >
                  edit
                </button>
                <button
                  type="submit"
                  onClick={() => props.handelDelete(data.id)}
                >
                  deletes
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
export default ShowData;
