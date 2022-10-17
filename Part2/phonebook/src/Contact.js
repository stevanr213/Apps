import React from "react";

const Contact = ({ person, onClick }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={onClick}>delete</button>
    </div>
  );
};

export default Contact;
