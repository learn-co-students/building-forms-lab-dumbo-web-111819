// Add BandInput component
import React, { Component } from 'react'
// import {connect} from 'react-redux'

class BandInput extends Component {
  state={
    name:''
  }
  handleSubmit=(e) => {
    e.preventDefault()
    const band=this.state //local component state
    // console.log(this.props)
    this.props.addBand(band)//update redux?
    this.setState({
      name:''
    })
    // console.log(band)
  }
  handleOnChange=(e) => {
    // e.preventDefault()
    console.log(e.target.value)
    // console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} value={this.state.name} name='name' type='text'></input>
          <button type='submit'>Submit</button>
        </form>
        {/* Band Input */}
      </div>
    )
  }
}


export default BandInput
