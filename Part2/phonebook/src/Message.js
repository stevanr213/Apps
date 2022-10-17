import React from "react";

const Message = ({ message }) => {
  const styleBase = {
    display: "none",
  };

  const styleOk = {
    backgroundColor: "lightgrey",
    color: "green",
    borderStyle: "solid",
    borderRadius: 5,
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 10,
  };

  const styleError = {
    ...styleOk,
    color: "red",
  };

  const style =
    message === ""
      ? styleBase
      : message.includes("removed")
      ? styleError
      : styleOk;

  return <div style={style}>{message}</div>;
};

export default Message;
