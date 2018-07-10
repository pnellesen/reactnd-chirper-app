import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount. props: ", this.props)
    //subscribe(() => this.forceUpdate());// This is rarely done, but applies for this particular use case
    this.props.dispatch(handleInitialData());
}


  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)