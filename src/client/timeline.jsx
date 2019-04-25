import React from 'react'
import { Link, withRouter } from 'react-router-dom'

export class Timeline extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timeline: [],
            errorMsg: null
        }
    }



    getTimeline = async () => {

        const url = ("/api/timeline")

        let response;
        try {
            response = await fetch(url, {
                method: "get"
            })
        } catch (err) {
            this.setState({ errorMsg: "Failed to connect to server: " + err });
        }
    }

    postUpdate = async () => {

        const url = ("/api/:userId/userpost")

        const payload = { id, author, post, time }

        let response;
        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            this.setState({ errorMsg: "Failed to connect to server: " + err });
            return;
        }

        if (response.status !== 201) {
            this.setState({ errorMsg: "Error when connecting to server: status code " + response.status });
            return;
        }


    }
    renderUserPost = (userPost) => {
        return (
            <div className="userPost">
                <h2>{userPost.author}</h2>
                <p>{userPost.post}</p>
                <p>{userPost.time}</p>
            </div>
        )
    }

    fillTimeline = (props) => {
        const userPosts = props.userPosts
        const listItems = userPosts.map((userPost) =>
            <li>{userPost}</li>
        )
        return (
            <ul>listItems</ul>
        );
    }

    render() {

        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;
        return null
        /*( 
            <div>
            {loggedIn ? (
        <div id="timeline-container">

        </div>) : null
        } </div>);
     */}
}
export default withRouter(Timeline);