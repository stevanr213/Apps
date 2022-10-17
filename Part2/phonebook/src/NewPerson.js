import React from "react";

const NewPerson = ({
  addNewPerson,
  newName,
  createName,
  newNumber,
  createNumber,
}) => {
  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input value={newName} onChange={createName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={createNumber}></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPerson;
