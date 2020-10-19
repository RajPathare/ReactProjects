import React, { useState } from 'react';

const SearchBar = (props) => {
    const [term,setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.callWhenSubmitted(term)
    }

    return (
        <div className="search-bar ui segment" style={{ backgroundColor: "#1a1a1a"}}>
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label style={{ color: "white"}}>Video search</label>
                    <input type="text" value={term} onChange={(e)=> setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )

};

export default SearchBar;