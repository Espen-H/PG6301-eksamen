import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import http from "axios";

import { Home } from "./home";
import Login from "./login";
import Profile from "./profile";
import SignUp from "./signup";
import HeaderBar from "./headerbar";
import Timeline from "./timeline";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            userCount: 1
        };
    }


    fetchAndUpdateUserInfo = async (userId) => {

        const url = `/api/user/${userId ? userId : this.state.user.userId}`;

        let response;

        try {
            response = await http.get(url);
        } catch (err) {
            this.setState({ errorMsg: "Failed to connect to server: " + err });
            return;
        }

        if (response.status === 401 || response.status === 500) {
            this.updateLoggedInUser(null);
            history.pushState("", "/") // #TODO find out why
            return;
        }

        if (response.status !== 200) {
            //TODO here could have some warning message in the page.
        } else {
            this.updateLoggedInUser(response.data);
        }
    };

    updateLoggedInUser = (user) => {
        this.setState(prev => ({ user: user }));
    };


    notFound() {
        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>
                    ERROR: This is not the page you are looking for.
                </p>
            </div>
        );
    };


    render() {
        /*
            When we have a switch, to have a component for a page we just use
            the attribute "component".
            However, if we need to pass some props to the component, we need
            to use the attribute "render".
         */

        const user = this.state.user ? this.state.user : null;

        return (
            <BrowserRouter>
                <div>
                    <HeaderBar user={user}
                        updateLoggedInUser={this.updateLoggedInUser} />
                    <Timeline user={user}
                        updateLoggedInUser={this.updateLoggedInUser} />
                    <Switch>
                        <Route exact path="/profile"
                            render={props => <Profile {...props}
                                user={this.state.user}
                                fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                            />} />
                        <Route exact path="/login"
                            render={props => <Login {...props}
                                user={this.state.user}
                                fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo} />} />
                        <Route exact path="/signup"
                            render={props => <SignUp {...props}
                                fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo} />} />
                        <Route exact path="/"
                            render={props => <Home {...props}
                                user={this.state.user}
                                fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo} />} />
                        <Route component={this.notFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
