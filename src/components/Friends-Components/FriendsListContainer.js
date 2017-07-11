

import React, { Component, PropTypes } from 'react';
import * as Types from '../../action/Friends-Actions/actionConstants';
import { connect } from 'react-redux';

export class FriendsContainer extends Component {
    render() {        
        return (
            <div>
                <input type='button' value='Show My Friends List' onClick={this.onShowFriends} />
            </div>
        );
    }
}
const mapPropsToDispatch = (dispatch) => {
    return {
        onShowFriends: () => {
            return dispatch({type:Types.GET_LIST,state:true});
        }
    }
};

FriendsContainer = connect(null, mapPropsToDispatch)(FriendsContainer);

export default FriendsContainer;