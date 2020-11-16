import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '546471043476-ofb9u098h77kk63doa5g9l8sseponh1p.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{ // client initialization returns a promise
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange); //for making realtime changes in the text if the user signs in/ signs out
                // after the state is changed, the component re-renders.
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        console.log(isSignedIn);
       if(isSignedIn)
       {
           console.log('signed in');
           this.props.signIn(this.auth.currentUser.get().getId());
       }
       else
       {
           console.log('signed out');
           this.props.signOut();
       }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null)
        {
            return null;
        }
        else if(this.props.isSignedIn)
        {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon">
                        Sign out!
                    </i>
                </button>
            )
        }
        else 
        {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon">
                        Sign in with Google
                    </i>
                </button>
            )
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);