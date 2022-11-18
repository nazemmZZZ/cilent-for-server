import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../actions"
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      this.props.loaduser()
      console.log(this.props)
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.Authenticated };
  }

  return connect(mapStateToProps,action)(ComposedComponent);
};
