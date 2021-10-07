import React, {useState} from "react";
import PropTypes from "prop-types"

function AddTodo({onCreate}) {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()&&value2.trim()) {
            onCreate(value, value2)
        }
    }

    return (
        <form style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} type="text" className="input" placeholder="Имя"/>
            <input value={value2} onChange={event => setValue2(event.target.value)} type="text" className="input" placeholder="Телефон"/>
            <button type="submit" className="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo