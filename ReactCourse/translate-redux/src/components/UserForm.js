import React from 'react';

import Button from './Button';
import Field from './Field';

class UserForm extends React.Component {
    render() {
        return (
            <div className="ui form">
                <Field />
                <Button />
            </div>
        )
    }
}

export default UserForm;