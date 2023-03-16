import { useState, useEffect } from 'react'
import phoneService from './services/phones'

// Components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {

    // App States
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const getPersons = () => {

        // Use phones.js's getAll() function to get
        // all of the phones in db.json using axios
        phoneService.getAll().then(phoneData => {
            setPersons(
                // Add visible property so filter works
                phoneData.map(person => {
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
        setNewNumber(event.target.value)
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
    const addPerson = (event, id) => {
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

        // New object to be added
        const newPerson = {
            id: persons.length + 1,
            name: newName,
            phone: newNumber,
            visible:true
        }

        // Add the person and number to the database
        console.log("Adding ", newPerson)
        phoneService
            .addNumber(newPerson)
            .then(response => {
                console.log(returnedPerson);
                // Crazy forumla to create array with old data,
                // and data from the response
                setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
            })


        // Add the new submission to the "Persons" state
        // setPersons(persons.concat({
        //     id: persons.length + 1,
        //     name: newName,
        //     phone: newNumber,
        //     visible:true
        // }))

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