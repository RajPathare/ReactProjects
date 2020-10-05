import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    // onInputChange(event){
    //     console.log(event.target.value);  event is a predefined js variable 
    //                                      (event.target.value returns the value entered by the user in the text field)
    // }

    // onFormSubmit(e){
    //     e.preventDefault();

    //     console.log(this.state.term)  this throws error, always use arrow function (refer 'this' -> udemy -> React course)
    // } 

    onFormSubmit = (e) => {
        e.preventDefault(); // dont reload the page after the form is submitted
        this.props.runWhenUserEnters(this.state.term) // when passing props to a class component, we use this.props instead of just props
    }

    render(){
        return(
            <div className="ui segment">
                {/* we don't use parentheses when using event handlers */} 
                 <form action="" className="ui form" onSubmit={this.onFormSubmit}> 
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        {/* <input type="text" onChange={(e) => {console.log(e.target.value)}} /> another way to declare function */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;