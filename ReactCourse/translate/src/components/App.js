import React from 'react';

import UserForm from './UserForm';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';


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
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
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