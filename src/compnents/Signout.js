import React, { Component } from 'react'
import { connect } from 'react-redux'
import *as action from "../actions"
class Signout extends Component {
    componentDidMount() {
        this.props.signout()
    }
  render() {
    return (
      <h1>Bye </h1>
    )
  }
}

export default connect(null,action)(Signout)