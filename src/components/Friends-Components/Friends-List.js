

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



export class Friends_List extends Component {
    constructor(state) {
        super();
        var friends = state.friends;
        console.log("the complete state is:", state);
    }
    returnListItems() {
        return this.props.friends.map((item) => {
            return (<li key={item.id}>
                {item.name}
            </li>)
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.returnListItems()}
                </ul>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {

// }

const mapStateToProps = (state) => {
    return { friends: state.FriendsReducer.friends };
}


Friends_List = connect(mapStateToProps, null)(Friends_List);

export default Friends_List;