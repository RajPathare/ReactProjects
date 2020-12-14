import React from 'react';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {


    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderText(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }


    renderText = (value) => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {

        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;