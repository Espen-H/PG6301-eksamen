import React from "react";
import { Link, withRouter } from "react-router-dom";

/*
    Just provide a header component for all pages, where we have a link to the
    home-page, and login/sing-up/logout buttons.
 */
export class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }

  doLogout = async () => {
    const url = "/api/user/logout";

    let response;

    try {
      response = await fetch(url, { method: "post" });
    } catch (err) {
      alert("Failed to connect to server: " + err);
      return;
    }

    if (response.status !== 204) {
      alert("Error when connecting to server: status code " + response.status);
      return;
    }

    this.props.updateLoggedInUser(null);
    this.props.history.push("/login");
  };

  renderLoggedIn(displayName) {
    return (
      <div className="msgDiv">
        <h3 className="notLoggedInMsg">
          Hello {displayName}
        </h3>
        <Link className="btn btnPartHeader" to="/profile" >Profile</Link>
        <div className="btn btnPartHeader" onClick={this.doLogout} id="logoutBtnId">
          Logout
        </div>
      </div>
    );
  }

  renderNotLoggedIn() {
    return (
      <div className="msgDiv">
        <div className="notLoggedInMsg">You are not logged in</div>
        <div className="btnPartHeader">
          <Link className="btn" to="/login">
            LogIn
          </Link>
          <Link className="btn" to="/signup">
            SignUp
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const user = this.props.user

    let content;
    if (! user) {
      content = this.renderNotLoggedIn();
    } else {
      content = this.renderLoggedIn(user.displayName);
    }

    return (
      <div className={"headerBar"}>
        <Link className="btn home" to={"/"}>
          Home
        </Link>
        {content}
      </div>
    );
  }
}

export default withRouter(HeaderBar);
