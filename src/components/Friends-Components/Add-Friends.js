import React, { Component, PropTypes } from 'react';
import * as Types from '../../action/Friends-Actions/actionConstants';
import { connect } from 'react-redux';
import Friends_List from './Friends-List';

export class Add_A_Friend extends Component {
    constructor(state) {
        super();
        this.props = state;
    }

    render() {
        let Fname, Fcity;
        return (
            <div className="container">
                <form className="form-signin">
                    <br /> <br /> <br />
                    <input type="text" className="form-control" placeholder="Friend Name" ref={x => Fname = x} />
                    <br />
                    <input type="text" className="form-control" placeholder="City Name" ref={x => Fcity = x} />
                    <br />
                    <button className="btn btn-primary" style={{ marginRight: 10 }} onClick={() => this.props.onAddFriend(Fname, Fcity)}>Add Friend</button>

                    <button className="btn btn-warning" style={{ float: 'right' }} onClick={() => this.props.onClear()}>Clear</button>

                    <button className="btn btn-info" onClick={() => this.props.onCheck(Fname)}>Check Name's</button>

                    <button className="btn btn-success" style={{ marginLeft: 10 }} onClick={() => this.props.onShowFriends(true)}>Show My Friends List</button>

                    {this.props.state.FriendsReducer.status && <Friends_List />}

                </form>
            </div>
        );
    }
}

Add_A_Friend.PropTypes = {
    onAddFriend: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired
}

const mapPropsToState = (state) => {
    return {
        state: state
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onAddFriend: (Fname, Fcity) => {
            dispatch(AddFriend(Fname.value, Fcity.value));
        },
        onClear: () => {
            dispatch(ClearFriend());
        },
        onCheck: () => {
            dispatch({ type: Types.CHECK_FRINDS });
        },
        onShowFriends: (isShow) => {
            return dispatch({ type: Types.GET_LIST, isShow });
        }
    }
};
function AddFriend(name, city) {
    return {
        type: Types.ADD_FRIEND,
        name, city
    }
}
function ClearFriend() {
    return { type: Types.CLEAR }
}

Add_A_Friend = connect(mapPropsToState, mapDispatchToProps)(Add_A_Friend);

export default Add_A_Friend;