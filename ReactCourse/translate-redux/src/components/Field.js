import React from 'react';
import { connect } from 'react-redux';

class Field extends React.Component {
    render() {

        const text = this.props.language === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.language
    }
}

export default connect(mapStateToProps,{

})(Field);