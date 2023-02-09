import { useState } from 'react'

const App = () => {

  // App States
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone:'(123) 456-7890' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  // When user is typing into the Name input,
  // update the state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // When user is typing into the Phone input,
  // update the state
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  // "Submit" is clicked
  const addPerson = (event) => {
    event.preventDefault() // Ignore default form behavior

    // Is this submission already present?
    const nameCheck = persons.filter((nameObj) => {
       return ( nameObj.name === newName
                && nameObj.phone === newPhone )
    })
    if (nameCheck.length > 0) { // Too many
      // Alert for duplicate
      alert(`${newName} is already added to phonebook`)
      return // Don't add the submission if it's a duplicate
    } 

    // Add the new submission to the "Persons" state
    setPersons(persons.concat({
      id: persons.length + 1,
      name: newName,
      phone: newPhone,
    }))

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
        { // Iterate the persons array, populate list of names & numbers
          persons.map((person) => {
            return(
              <li key={person.id}>{person.name} {person.phone}</li>
            )
          })
        } 
      </ul>
    </div>
  )
}

export default App