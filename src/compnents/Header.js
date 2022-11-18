import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './headerStyle.css'
class Header extends Component {
    renderHeader() {
        console.log(this.props.auth);
        if (!this.props.auth) {
            return (
              <div>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
                <Link className="link" to="/signin">
                  Sign In
                </Link>
              </div>
            );
        }
        else {
            return (
              <div>
                <Link className="link" to="/signout">
                  Sign Out
                </Link>
              </div>
            );
        }
        
    }
  render() {
    return (
      <div className="header">
        <Link className="link" to={"/"}>
          redux auth
        </Link>
        {this.renderHeader()}
        <Link className="link" to="/feature">
          Feature
        </Link>
      </div>
    );
  }
}
 function mapStateToProps(state) {
    return { auth: state.auth.Authenticated };
  }

export default connect(mapStateToProps) (Header)