import React from 'react';

class SearchBar extends React.Component{

    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.callWhenSubmitted(this.state.term)
    }

    render(){
        return (
            <div className="search-bar ui segment" style={{ backgroundColor: "#1a1a1a"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label style={{ color: "white"}}>Video search</label>
                        <input type="text" value={this.state.term} onChange={(e)=>{ this.setState({term: e.target.value}) }}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;