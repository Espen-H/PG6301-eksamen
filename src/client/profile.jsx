import React from 'react'


class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: this.props.displayName,
            birthday: this.props.birthday,
            location: this.props.location,
            friends: this.props.friends,
            userPosts: this.props.userPosts
        }
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }

    render() {
        <div>
            <h1>Welcome to the home of {state.displayName}</h1>
            </div>

    }
}

