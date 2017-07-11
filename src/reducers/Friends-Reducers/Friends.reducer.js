
import * as Types from '../../action/Friends-Actions/actionConstants';

var initialState = {
    status: false,
    friends: [
        { id: 1, name: 'satish', status: true },
        { id: 2, name: 'satish1', status: true },
        { id: 3, name: 'satish2', status: true },
        { id: 4, name: 'satish3', status: true },
        { id: 5, name: 'satish4', status: true }]

}
const addFriend = (friends, action) => {

    return [
        ...friends,
        {
            id: friends.length + 1,
            name: action.name,
            status: true
        }
    ];
};
export const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_FRIEND:
            return Object.assign({}, state, { friends: addFriend(state.friends, action) });
        case Types.GET_LIST:
            return Object.assign({},state,state.status = action.isShow);
        default:
            return state;
    }
}
export default FriendsReducer;