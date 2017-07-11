

import React, { PropTypes } from 'react';

const Todo = (onToggleSelect, text, selected) => {
    return (
        <li onClick={onToggleSelect}>{text} -- {selected}
        </li>
    )
}

Todo.PropTypes = {
    onToggleSelect: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
}

export default Todo;