import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const newNameChange = (event) => {
    // Handle onChange to prevent static element
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault() // Remove default behavior

    // Returns -1 if not in array
    const isThere = persons.findIndex((thisPerson) => thisPerson.name === newName);
    
    if (isThere < 0) { 
      // The person is not in the phonebook, add them
      setPersons(persons.concat({ name: newName }))
    } else {
      alert(`${newName} is already added to the phonebook`);
      // Prevent resetting the newName label
      return;
    }
    setNewName("");

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={newNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return(
            <li key={person.name}>{person.name}</li>
          )
        })} 
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App