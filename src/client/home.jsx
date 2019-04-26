import React from "react";
import { Link } from "react-router-dom";
import Timeline from "./timeline"

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            time: "",
            errorMsg: null
        }
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }
    onPostChange = (event) => {
        this.setState({ post: event.target.value, time: Date.now(), errorMsg: null });
    };

    createPost = async () => {
        const {userId, displayName, post, time } = this.state
        const url = `/api/user/${userId}/userpost`;

        let response;

        try {
            response = await http.post(url, {
                userId: userId,
                displayName: displayName,
                post: post,
                time: time
            });
        } catch (err) {
            this.setState({ errorMsg: "Failed to connect to server: " + err });
            return;
        }
        if (response.status !== 201) {
            this.setState({ errorMsg: "Error when connecting to server: status code " + response.status });
            return;
        }
        this.setState({ errorMsg: null })

    };

    render() {
        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;

        return (
            <div id="HomeContainer">
                {loggedIn ? (
                    <div id="loggedInHome">
                        <div id="status_update">
                            <form onSubmit={this.createPost}>
                                <p>How was your day {user.displayName}?</p>
                                <input type="text" value={this.state.post}
                                    onChange={this.onPostChange} />
                                <input type="submit" value="tasty userinputs" />

                            </form>
                        </div>

                        <div id="timeline">
                            <Timeline posts={user.userPosts}/>
                        </div>
                    </div>
                ) : (
                        <div>
                            <p>If you already have a account</p>
                            <Link to={"/login"} className={"btn"}>Login</Link>
                            <p>If you don't have a account</p>
                            <Link to={"/signup"} className={"btn"}>Sign up</Link>
                        </div>
                    )}

            </div>
        );
    }
}

