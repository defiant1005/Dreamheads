import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "../Context"

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: ".5rem"
    },
    input: {
        marginRight: "1rem"
    }
}

function TodoItem({todo, index}) {
    const {removeTodo} = useContext(Context)
    return (
        <li className="item" style={styles.li}>
        <span>
            {index+1}
            &nbsp;
            {todo.title}
        </span>
        {todo.num}
        <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem