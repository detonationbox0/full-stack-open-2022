import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    // How many of them are there?
    const nameCheck = persons.filter(nameObj => nameObj.name === newName)
    if (nameCheck.length > 0) { // Too many
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat({
      name: newName
    }))

    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>

        <div>
          name:
          <input  value={newName}
                  onChange={handleNameChange}
          />
        </div>

        <div>
          number:
          <input  value={newPhone}
                  onChange={handlePhoneChange}
          />
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
      <div>debug: {newPhone}</div>
    </div>
  )
}

export default App