import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(BandsContainer)
