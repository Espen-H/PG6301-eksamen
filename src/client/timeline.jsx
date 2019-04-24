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
    componentDidMount() {

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

    const url = ("/api/userpost")

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

function renderUserPost(userPost) {
    return (
        <div className="userPost">
            <h2>{userPost.author}</h2>
            <p>{userPost.post}</p>
            <p>{userPost.time}</p>
        </div>
    )
}

function fillTimeline(props) {
    const userPosts = props.userPosts
    const listItems = userPosts.map((userPost) =>
        <li>{userPost}</li>
    )
    return (
        <ul>listItems</ul>
    );
}

export default withRouter(Timeline);