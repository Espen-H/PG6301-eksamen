import React from 'react'
import {withRouter } from 'react-router-dom'


export class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <h1>Welcome to the home of {user.displayName}</h1>
            </div>
        )
    }
}

export default withRouter(Profile);
