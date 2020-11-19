import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';

import Header from './Header';
import history from '../history'; // we are maintaining our own history obj instead of using react's history obj to make it easier to use programmatic navigation.



const App = () => {
    return (
        <div className="ui container">
            {/* Always visible components eg - Header, must be kept outside the BrowserRouter component */}
            {/* BrowserRouter -> Router if we need to use our custom history obj */}
            <Router history={history}> 
            <div>
            {/* Header must be inside BrowserRouter since we are using Link tag in Header and Link cannot be used outside a Router (BrowserRouter) */}
                <Header/> 
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
            </Router>
        </div>
        
    )
}

export default App;