// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'


class BandInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addBand({name: this.state.text})
    this.setState({text: ''})
  }
  render() {
    return(
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <input 
            type ='text'
            name = 'text'
            value = {this.state.text}
            onChange = {this.handleOnChange}
          />
          <input type = 'submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (submittedBand) => dispatch({type: 'ADD_BAND', band: submittedBand })
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
