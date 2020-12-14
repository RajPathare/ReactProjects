import React from 'react';
import UserForm from './UserForm';

import { connect } from 'react-redux';
import { setLanguage } from '../actions'

class App extends React.Component {


    onLanguageChange = (language) => {
        this.props.setLanguage(language);
    }

    render() {
        return (
        <div className="ui container">
            Select a language
            <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
            <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
            <UserForm />
        </div>
        )
    }
}

export default connect(null,{
    setLanguage
})(App);