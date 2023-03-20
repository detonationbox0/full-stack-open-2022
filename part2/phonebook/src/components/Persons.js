const Persons = ({persons}) => {

    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                { // Iterate the persons array, populate list of names & numbers
                    persons.map((person) => (
                        person.visible
                        ?   <li key={person.id}>{person.name} {person.number}
                                <button>Delete</button>
                            </li>
                        : null 
                    ))
                } 
            </ul>
        </div>
    )
}

export default Persons 
