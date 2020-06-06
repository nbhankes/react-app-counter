import React from "react";
//import "./App.css";

const NavTab = (props) => {
  console.log(props);
  return <li style={NavStyle}>{props.name}</li>;
};

const NavStyle = {
  fontSize: "3rem",
  borderRadius: "10px",
  color: "white",
  border: "none",
  padding: "0px 10px",
  marginTop: "auto",
  marginBottom: "auto",
  listStyle: "none",
};

export default NavTab;
