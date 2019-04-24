import React from 'react'
import { withRouter, Link } from 'react-router-dom'


export class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            displayName: "",
            birthday: "",
            location: "",
            errorMsg: null
        };
    }

    componentWillMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }
    
      // #TODO Fix this
       onDisplayNameChange = (event) => {
           this.setState({ displayName: event.target.value, errorMsg: null });
       };
       onBirthdayChange = (event) => {
           this.setState({ birthday: event.target.value, errorMsg: null });
       };
       onLocationChange = (event) => {
           this.setState({ location: event.target.value, errorMsg: null });
       };
   
       changeUserInfo = async () => {
   
           const { userId, displayName, birthday, location } = this.state;
   
           const url = '/api/user/:userId/update';
   
           const payload = { displayName: displayName, birthday: birthday, location: location};
   
           let response;
   
           try {
               response = await fetch(url, {
                   method: "put",
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(payload)
               });
           } catch (err) {
               this.setState({ errorMsg: "Failed to connect to server: " + err });
               return;
           }
   
           if (response.status !== 204) {
               this.setState({ errorMsg: "Error when connecting to server: status code " + response.status });
               return;
           }
           await this.props.fetchAndUpdateUserInfo();
           this.props.history.push('/profile');
   
       };
   


    render() {

        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;
        return (
            <div>
                {loggedIn ? (
                    <div>
                        <h1>Welcome to the home of {user.displayName}</h1>

                        <div>
                            <h2>Do you want to change your information?</h2>
                            <form onSubmit={this.changeUserInfo}>
                                <label>
                                    <p>Display name</p>
                                    <input type="text" value={this.state.displayName}
                                        onChange={this.onDisplayNameChange}
                                        id="profileDisplayName" />
                                    <input type="submit" value="Change" />

                                </label>
                                <label>
                                    <p>Birthday</p>
                                    <input type="text" value={this.state.birthday}
                                        onChange={this.onBirthdayChange}
                                        id="profileBirthday" />
                                    <input type="submit" value="Change" />
                                </label>
                                <label>
                                    <p>Location</p>
                                    <input type="text" value={this.state.location}
                                        onChange={this.onLocationChange}
                                        id="profileLocation" />
                                </label>
                                <input type="submit" value="Change" />
                            </form>
                        </div></div>) : (
                            <div>
                                <p>You're not logged in!</p>
                            <p>If you already have a account</p>
                            <Link to={"/login"} className={"btn"}>Login</Link>
                            <p>If you don't have a account</p>
                            <Link to={"/signup"} className={"btn"}>Sign up</Link>
                        </div>
                        )}
            </div>
        )
    }
}


export default withRouter(Profile);
