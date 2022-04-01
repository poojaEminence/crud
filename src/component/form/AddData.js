import React from "react";

function AddData(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <h1> Submit Form</h1>
        <p> name</p>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={props.user.name}
          onChange={props.handleChange}
        ></input>
        <p>last name</p>
        <input
          type="text"
          name="lastname"
          placeholder="enter name"
          value={props.user.lastname}
          onChange={props.handleChange}
        ></input>
        <p>address</p>
        <input
          type="address"
          name="address"
          placeholder="enter address"
          value={props.user.address}
          onChange={props.handleChange}
        ></input>
        <bt />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}
export default AddData;
