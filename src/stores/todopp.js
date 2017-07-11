
const initialState = {
    todos: []
}

const addToDo = (todos, action) => {

    return [
        ...todos,
        {
            id: todos.length,
            text: action.text,
            selected: false
        }
    ];

}

const toggleToDo = (todos, id) => {
    return todos.map(todo => {
        if (todo.id == id) {
            return object.assign({}, todo, { selected: !todo.selected })
        }
        return todo;
    });

}

const todoapp = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, { todos: addToDo(state.todos, action) });

        case 'TOGGLE':
            return Object.assign({}, state, { todos: toggleToDo(state.todos, action.id) });

        case 'DELETE':
            return Object.assign({}, state, { todos: onDeleteToDo(state.todos, action.id) });
        default:
            return state;
    }
}

export default todoapp;