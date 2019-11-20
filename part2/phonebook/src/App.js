import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Messages from './components/Messages'
import Footer from './components/Footer'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import './index.css'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ topMessageName, setTopMessageName ] = useState(null)
  const [ topStatus, setTopStatus ] = useState(null)

  const hook = () => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }
  
  useEffect(hook, [])

  const searchResult = persons.filter(person => person.name.search(new RegExp(newSearch, "i")) >= 0);
  
  const renderPeople = (result) => result.map(person => <Person key={person.id} person={person} deletePerson={deletePerson}/> );

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
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`) === true){
        personService
          .update(checkDuplicate.id, personObject)
          .then(person => {
            alert("updated phone number");
          })
      }
    } else {
      setTopStatus("new");
      personService
      .create(personObject)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setTopMessageName(personObject.name);
        setNewName('');
        setNewNumber('');
      })
      setTimeout(() => {
        setTopStatus(null);
      }, 3000)
    }
  };

  const deletePerson = (id) => {
    const person = id.target.id;
    setTopMessageName(id.target.name);
    if(window.confirm(`Do you really want to delete ${id.target.name}`) === true){
      personService
      .remove(person)
      .then(removedPerson => {
        setPersons(persons.filter(p => p.id !== id));
        setNewName('');
        setNewNumber('');
      }).catch(err => {
        setTopStatus("deleted");
      })
      setTimeout(() => {
        setTopStatus(null);
      }, 4000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Messages message={topStatus} name={topMessageName}/>
      </div>
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
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default App