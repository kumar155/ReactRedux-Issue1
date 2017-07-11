
import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

const settings = ({ onAdd, onDelete }) => {
    let inputValue,inputText;
    return (
        <div>
            <input type="button" value="Add" onClick={() => onAdd(inputValue.value,inputText)} />
            <input type="button" value="Delete" onClick={onDelete} />
            <input type="text" ref={node => inputValue = node} />
            <input type="text" ref={node => inputText = node} />
        </div>
    );
}

settings.PropTypes = {
    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: () => {
            dispatch({ type: 'DELETE_TODO' });
        },
        onAdd: (text,ip) => {
            console.log(text);
            dispatch({ type: 'ADD_TODO', text });
        }
    }
}

export default connect(null, mapDispatchToProps)(settings);