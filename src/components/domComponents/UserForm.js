


import React, { Component ,PropTypes} from 'react';
import { render } from 'react-dom';
import * as ActionTypes from '../../action/actioTypes';
import { connect } from 'react-redux';


export class UserForm extends Component {

    render() {
        let nameInput, passwordInput;
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Add New User</h2>
                    
                    <input type="text" className="form-control" placeholder="User Name" ref={node => nameInput = node } />
                    <br />
                   
                    <input type="text" id="inputPassword" className="form-control" placeholder="Default Password" ref={x => passwordInput = x} />
                    <br />
                    <button className="btn btn-primary" style={{ marginRight: 10 }} onClick={() => this.onUserAddClick(nameInput, passwordInput.value)}>Add</button>

                    <button className="btn btn-warning" style={{ float: 'right' }} onClick={() => this.onCancelClick()}>Cancel</button>

                    <button className="btn btn-info" onClick={() => this.onCheckNameExists(nameInput.value)}>Check Names</button>
                </form>
            </div>
        );
    }

}

UserForm.PropTypes = {
    onUserAddClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onCheckNameExists :PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {

    return {
        onUserAddClick: (name) => {
            dispatch({ type: ActionTypes.ADD_ITEM, name })
        },
        onCancelClick: () => {
            dispatch({ type: ActionTypes.CANCEL_ITEM });
        },
        onCheckNameExists: (name) => {
            dispatch({ type: ActionTypes.CHECK_NAME, name })
        }
    }

}




export default connect(null,mapDispatchToProps)(UserForm);