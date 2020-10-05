import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';


class UserHeader extends React.Component {

    componentDidMount(){
        // this.props.fetchUser(this.props.userId);
    }

    render()
    {
        // const { user } = this.props;
        // among all the users fetched (user.Id), find that one user for which the component re-rendered
        // this is like finding 1/100 users which are fetched
        const user = this.props.user.find((user) => user.id === this.props.userId)

        if(!user)
        {
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}


const mapStateToProps = (state, ownProps) =>{
    // return { user: state.users.find(user => user.id === ownProps.userId) } this is done for reducing load to a component
    return { user: state.users };
}


export default connect(mapStateToProps,{
    // fetchUser:fetchUser
})(UserHeader);