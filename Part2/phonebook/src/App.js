import React from "react";
import contactServices from "./services/contacts";

import { useState, useEffect } from "react";
import Contact from "./Contact";
import Filter from "./Filter";
import NewPerson from "./NewPerson";
import Message from "./Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    contactServices.getAll().then((persons) => setPersons(persons));
  }, []);

  const createName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const createNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    const samePerson = persons.find((person) => person.name === newName);
    if (samePerson) {
      if (samePerson.number !== newNumber) {
        const id = samePerson.id;
        contactServices.update(id, newPerson).then((returnedPerson) => {
          setMessage(`${samePerson.name}'s number has been updated`);
          setTimeout(() => setMessage(""), 3000);
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson
            )
          );
        });

        return;
      } else {
        return;
      }
    }
    if (newPerson.name !== "" && newPerson.number !== "") {
      contactServices.create(newPerson).then((returnedContact) => {
        setMessage(`${newPerson.name} has been added to the phonebook`);
        setTimeout(() => setMessage(""), 3000);
        setPersons(persons.concat(returnedContact));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const createFilter = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const handleFilter = () => {
    const result = persons.filter(
      (person) => person.name.toLowerCase().search(filter.toLowerCase()) >= 0
    );
    return result;
  };

  const personsToShow = handleFilter();

  const removePerson = (id) => {
    contactServices
      .removePerson(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        const personToRemove = persons.filter((person) => person.id === id);
        setMessage(
          `Information of ${personToRemove.name} has already been removed from server`
        );
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter filter={filter} onChange={createFilter} />
      <h2>Add a new</h2>
      <NewPerson
        addNewPerson={addNewPerson}
        newName={newName}
        createName={createName}
        newNumber={newNumber}
        createNumber={createNumber}
      />
      <h2>Numbers</h2>
      <div>
        {personsToShow.map((person) => (
          <Contact
            key={person.id}
            person={person}
            onClick={() => removePerson(person.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
