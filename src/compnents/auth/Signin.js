import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { formPropTypes } from "redux-form/lib/propTypes";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { compose } from "redux";
export class Signin extends Component {
  onSubmit = (formProp) => {
    console.log(formProp);
    this.props.signin(formProp, () => {
      this.props.history.push("/feature");
    });
  };
  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorM}</div>
        <button>Signin</button>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return { errorM: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "Signin" })
)(Signin);
