import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

// This is a function based component

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {console.log(position.coords.latitude);},
//         (err) => {console.log(err);}
//     );
//     return (<div>Latitude: </div>);
// };

// This is a class based component

class App extends React.Component {

    constructor(props) { // not necessary to define this function in class. It is used to initialize things. It is always called first.
        super(props) // super - reference to parents (React.Components) constructor function
        
        this.state = {
            lat: null, // we don't know the value of latitude yet, so init it as null
            errorMessage: ''
        };
    }

    // state = { lat: null, errorMessage: ''}; Alternate way to initialize state (we don't use this.state here.)

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => 
            {
                this.setState({ lat: position.coords.latitude })
                console.log(position.coords.latitude);
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //helper method - we can call it anything (just for adding a certain style to all choices)
    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat)
        {
            return <SeasonDisplay latitude={this.state.lat}/>
        }
        else return <Spinner message="Please accept location request"/>
    }


    // render is required by React (we have to define it or React will throw an error..)
    render() { // render is called a lot of times

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);