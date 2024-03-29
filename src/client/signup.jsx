import React from 'react';
import { withRouter } from 'react-router-dom'

export class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            displayName: "",
            birthday: "",
            location: "",
            password: "",
            confirm: "",
            errorMsg: null
        };
    }

 
    onUserIdChange = (event) => {
        this.setState({ userId: event.target.value, errorMsg: null });
    };

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value, errorMsg: null });
    };

    onConfirmChange = (event) => {
        this.setState({ confirm: event.target.value, errorMsg: null });
    };
    onDisplayNameChange = (event) => {
        this.setState({ displayName: event.target.value, errorMsg: null });
    };

    onBirthdayChange = (event) => {
        this.setState({ birthday: event.target.value, errorMsg: null });
    };

    onLocationChange = (event) => {
        this.setState({ location: event.target.value, errorMsg: null });
    };

    doSignUp = async () => {

        const { userId, displayName, birthday, location, password, confirm } = this.state;

        if (confirm !== password) {
            this.setState({ errorMsg: "Passwords do not match" });
            return;
        }

        const url = "/api/user/signup";

        const payload = { userId: userId, displayName: displayName, birthday: birthday, location: location, password: password };

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


        if (response.status === 400) {
            this.setState({ errorMsg: "Invalid userId/password" });
            return;
        }

        if (response.status !== 201) {
            this.setState({ errorMsg: "Error when connecting to server: status code " + response.status });
            return;
        }

        this.setState({ errorMsg: null });
        await this.props.fetchAndUpdateUserInfo(userId);
        event.preventDefault();
        this.props.history.push("/");

    };

    render() {

        let error = <div></div>;
        if (this.state.errorMsg !== null) {
            error = <div className="errorMsg"><p>{this.state.errorMsg}</p></div>
        }

        let confirmMsg = "Ok";
        if (this.state.confirm !== this.state.password) {
            confirmMsg = "Not matching";
        }

        return (
            <div className="loginAndsignup">
                <form onSubmit={this.doSignUp}>
                    <label>
                        <p>User Id:</p>
                        <input type="text"
                            value={this.state.userId}
                            onChange={this.onUserIdChange}
                            id="userIdInput"
                        />
                    </label>
                    <label>
                        <p>Display Name:</p>
                        <input type="text"
                            value={this.state.displayName}
                            onChange={this.onDisplayNameChange}
                            id="displayNameInput"
                        />
                    </label>
                    <label>
                        <p>Birthday:</p>
                        <input type="text"
                            value={this.state.birthday}
                            onChange={this.onBirthdayChange}
                            id="birthdayInput"
                        />
                    </label>
                    <label>
                        <p>Location:</p>
                        <input type="text"
                            value={this.state.location}
                            onChange={this.onLocationChange}
                            id="locationInput"
                        />
                    </label>
                    <label>
                        <p>Password:</p>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                            id="passwordInput"
                        />
                    </label>
                    <label>
                        <p>Confirm:</p>
                        <input type="password"
                            value={this.state.confirm}
                            onChange={this.onConfirmChange}
                            id="confirmInput"
                        />
                        <div>{confirmMsg}</div>
                    </label>
                    <input type="submit" value="Submit" />
                    {error}
                </form>
            </div>

        );
    }
}

export default withRouter(SignUp);
