
import React, { PropTypes } from 'react';
import Todo from './todo';

const TodoList = (todos, onToggleSelect) => {

    return (
        <ul>
            {todos.map(each => {
                return (<Todo key={each.id}
                    onToggleSelection={onToggleSelect(each.id)}
                    {...each}
                />)
            })}
        </ul>
    );
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired
}


export default TodoList;