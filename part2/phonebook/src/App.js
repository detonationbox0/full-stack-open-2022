import { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {

    // App States
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setnewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const getPersons = () => {
        // Get the people data from localhost:3001/persons
        axios.get("http://localhost:3001/persons")
        // On response...
        .then(response => {
            // Set state of persons
            setPersons(
                // Add visible property so filter works
                response.data.map(person => {
                    person.visible = true
                    return person
                })
            )
        })
    }

    // After first render, fetch persons data
    // apply to persons state    
    useEffect(getPersons, [])

    // When user is typing into the Name input,
    // update the state
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    // When user is typing into the Phone input,
    // update the state
    const handlePhoneChange = (event) => {
        setnewNumber(event.target.value)
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
            || obj.number.toLowerCase().includes(filterValue)
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
                      && nameObj.number === newNumber )
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
            phone: newNumber,
            visible:true
        }))

    }


    return (
        <div>
            <h2>Phonebook</h2>

            <Filter filter={filter}
                    handleFilterChange={handleFilterChange}
            />

            <PersonForm  states={[newName, newNumber]}
                        handlers={[ addPerson,
                                    handleNameChange,
                                    handlePhoneChange ]} />
            
            <Persons persons={persons} />

        </div>
    )
}

export default App