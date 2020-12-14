import React from 'react';

import UserForm from './UserForm';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';


class App extends React.Component {

    state = {
        lang: 'english'
    };


    onLanguageChange = (language) => {
        this.setState({
            lang: language
        })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language!
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
                </div>

                <LanguageContext.Provider value={this.state.lang}>
                    <ColorContext.Provider value="red">
                        <UserForm />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
                
            </div>
        )
    }
}

export default App;