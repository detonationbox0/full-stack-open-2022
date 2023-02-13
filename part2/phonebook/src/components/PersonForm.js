const PersonForm = ({states, handlers}) => {

    // load states
    const [newName, newPhone] = states
    
    // load event handlers
    const [addPerson, handleNameChange, handlePhoneChange] = handlers

    return (
        <div>
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
        </div>
    )
}

export default PersonForm 