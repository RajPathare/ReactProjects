import React from 'react';
import { Field, reduxForm } from 'redux-form'; //(Field -> component), (reduxForm -> function just like connect())
class StreamCreate extends React.Component {


    renderError = (meta) => {

        if(meta.touched && meta.error)
        {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => { // when we pass a component to Field, it passes a object to this called function, formProps is this object.
        // console.log(formProps);
        // return <input onChange={formProps.input.onChange} values={formProps.input.value} />; //longer syntax
        // return <input {...formProps.input} /> // short syntax for hooking up everything
        // formProps.input -> consists of everything (onChange, value ...)
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;

        return (
            <div className={className}>
                <label>{formProps.label}</label> 
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues); // this has all the values we passed in the form (text field)
    }

    render(){
        // console.log(this.props);
        return (
            //handleSubmit -> provided by redux-form, it handles e.preventDefault and other functions by itself.
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" component={this.renderInput} label="Enter Title"/> 
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {

    const errors = {};

    // if we return an empty obj, redux thinks that everything is working fine
    if(!formValues.title){
        errors.title = 'You must enter a title!';
    }
    if(!formValues.description)
    {
        errors.description = 'You must enter a description!';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate', // takes in one object, we put in different conf inside this object. Here, form is just the name of the form that we're creating.
    validate: validate
})(StreamCreate);