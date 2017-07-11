
import React, { Component } from 'react';
import {connect} from 'react-redux';
import SettingsContainer from './presentational/settings'
import TodoListContainer from './container/todolistcontainer'
import UserForm from './domComponents/UserForm';
import UserReg from './domComponents/userReg';
import Add_A_Friend from './Friends-Components/Add-Friends';
import Friends_List from './Friends-Components/Friends-List';
import FriendsContainer from './Friends-Components/FriendsListContainer';

export class App extends Component {  
    render() {
        return (
            <div>                
                <Add_A_Friend />               
            </div>
        );
    }
}

export default App;