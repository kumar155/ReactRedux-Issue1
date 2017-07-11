

import * as ActionTypes from '../action/actioTypes';

var initialState = {
    users: []
};

const addItem = (state, action) => {
    var newItem = state.users;
    return Object.assign({}, state, { users: [...state.users, newItem] });
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {

        case ActionTypes.ADD_ITEM:
            return addItem(state, action);

        case ActionTypes.EDIT_ITEM:
            return Object.assign({}, state, { users: editItem(state, action) });

        case ActionTypes.DELETE_ITEM:
            return Object.assign({}, state, { users: deleteItem(state, action) });

        case ActionTypes.TOGGLE_ITEM:
            return Object.assign({}, state, { users: toggleItem(state, action) });
            
        case ActionTypes.CHECK_NAME:
            return Object.assign({}, state, { users: addItem(state, action) });

        default:
            return state;
    }
}

export default UserReducer;