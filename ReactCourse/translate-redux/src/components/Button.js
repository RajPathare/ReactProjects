import React from 'react';
import { connect } from 'react-redux';


class Button extends React.Component {
    render() {

        const text = this.props.language === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <button className="ui button primary">{text}!</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.language
    }
}

export default connect(mapStateToProps, {

})(Button);