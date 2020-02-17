import React, { Component } from 'react'
import {connect} from 'react-redux'
import Band from './Band'
import {addBand} from '../actions/bands'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    // let arrayOfComponents=this.props.bands.map((bandObj,index)=><Band key={index} band={bandObj}/>)
    return(
      <div>
        {<BandInput addBand={this.props.addBand}/>}
        {this.props.bands.map((bandObj,index)=> (<Band key={index} addBand={this.props.addBand} band={bandObj}/>))}
      </div>
    )
  }
}


const mapStateToProps=(state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps=(dispatch) => {
  return{
    addBand: (band) => {
      dispatch(addBand(band))
    }
  }
  
}


export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
