
import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../presentational/TodoList';

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleSelect:(id) => {
            dispatch({type: 'TOGGLE',id})
        }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)