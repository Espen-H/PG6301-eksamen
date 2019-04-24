import React from "react";
import { Link } from "react-router-dom";


export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchAndUpdateUserInfo();
        }
    }

    


    render() {
        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;

        return (
            <div>
                {loggedIn ? (
                    <div>
                        <div id="status_update">
                            <p>Sup my dude?</p>
                            <input type="text"></input>
                            <div className={"btn"}>Post</div>
                        </div>

                        <div id="timeline">
                           <p>amazing timeline here</p>
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
