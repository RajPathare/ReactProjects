import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    };

    // when using async-await - steps to be followed - 
    // include async before func -> await before a method which will take some time to resp -> include const var so that you can access the response
    onSearchSubmit = async (term) => {
      const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })

        this.setState({ images: response.data.results }); // images state was empty arr earlier, now we set the results to it.
    }
    
    render() 
    {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
            {/* passing prop to searchbar component (from app to searchbar) */}
            {/* here we pass a props as a - (function) so that we can access the variable from child to parent */}
                <SearchBar runWhenUserEnters={this.onSearchSubmit} /> 
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;