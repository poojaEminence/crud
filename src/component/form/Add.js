import React from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
//import {useState} from "react";
function Add(props) {
  return (
    <>
      <Button variant="success" onClick={props.handleShow}>
        Add Data
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.editDate ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            onSubmit={props.editDate ? props.UpDateChange : props.handleSubmit}
          >
            <p>Name</p>
            <input
              type="text"
              placeholder="enter name"
              name="name"
              value={props.value.name}
              onChange={props.handleChange}
            ></input>
            <span>{props.formError && props.formError.name}</span>
            <p>email</p>
            <input
              type="email"
              placeholder="enter name"
              name="email"
              value={props.value.email}
              onChange={props.handleChange}
            ></input>
            <span>{props.formError && props.formError.email}</span>
            <p>password</p>
            <input
              type="password"
              placeholder="enter name"
              name="password"
              value={props.value.password}
              onChange={props.handleChange}
            ></input>
            <span>{props.formError && props.formError.password}</span>
            <Modal.Footer>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Table triped bordered hover variant="light">
        <thead>
          <input
            type="search"
            placeholder="Enter Search Data"
            name="search"
            value={props.searchData}
            onChange={(event) => props.handleSearch(event)}
          ></input>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        {props.dataAll.map((data, i) => (
          <tbody>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => props.handleUpdate(data.id)}
                >
                  UpDate
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => props.handelDelete(data.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}

export default Add;
