import React, { Component } from 'react';

class Person extends Component {
    state = {  }
    render() { 
        return ( <p>{this.props.name}</p> );
    }
}
 
export default Person;