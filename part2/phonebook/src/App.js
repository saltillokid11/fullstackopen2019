import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(reponse => {setPersons(reponse.data)})
  }, [])

  const searchResult = persons.filter(person => person.name.search(new RegExp(newSearch, "i")) >= 0);
  
  const renderPeople = (result) => result.map(person => <Person key={person.id} person={person} /> );

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
    };
    const checkDuplicate = persons.find(human => human.name === newName);
    if(checkDuplicate){
      alert(newName + " is already added to phonebook");
      return;
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleSearchChange={ (event) => { handleSearchChange(event) } }
      />
      <div></div>
      <h2>Add New</h2>
      <PersonForm 
        addPerson={addPerson} 
        newNumber={newNumber} 
        newName={newName} 
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
       <div>
        {renderPeople(searchResult)}
      </div>
    </div>
  )
};

export default App