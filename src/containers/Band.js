import React, {Component} from 'react';

export default class Band extends Component{

    render(){
        console.log(this.props.band.name)
        const {band} =this.props
      return(
        <div>
          <li>{band.name}</li>
        </div>
      )
    }
}

//cannot render an object (key/value pairs). ONLY values of an object can be rendered