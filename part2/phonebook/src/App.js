import { useState } from 'react'

const App = () => {

    // App States
    const [persons, setPersons] = useState([
        { id: 1, name: 'Arto Hellas', phone:'(123) 456-7890', visible: true },
        { id: 2, name: 'Todd Morris', phone:'(222) 222-2222', visible: true },
        { id: 3, name: 'Ada Lovelace', phone:'(111) 444-3333', visible: true }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('')

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

    // When user is typing into the Filter input,
    // update the state
    const handleFilterChange = (event) => {

        setFilter(event.target.value)
        const filterValue = event.target.value.toLowerCase()

        // Set the visible properties of persons
        // to true based on filter value
        const filterPersons = persons.map((obj) => {

            obj.name.toLowerCase().includes(filterValue)
            || obj.phone.toLowerCase().includes(filterValue)
            ? obj.visible = true : obj.visible = false
            
            return obj
        })

        // Update state of persons to include new visible properties
        // based on filter value
        setPersons(filterPersons)
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
            visible:true
        }))

    }


    return (
        <div>
            <h2>Phonebook</h2>

                <div>
                    filter:
                    <input  value={filter}
                            onChange={handleFilterChange}
                    />
                </div>

            <h2>Add a new</h2>

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
                    persons.map((person) => (
                      person.visible
                      ? <li key={person.id}>{person.name} {person.phone}</li>
                      : null 
                    ))
                } 
            </ul>
        </div>
    )
}

export default App