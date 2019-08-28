import React, { Component } from 'react';
import Person from './Person.js'

class App extends Component {
    state = { people: [] }

    handleFetch = (people) => {
        this.setState({
            people: people
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.people.map(person => <Person key={person.name} name={person.name} craft={person.craft}/>)}
            </div>
        );
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => this.handleFetch(data.people))
            // .then(data => this.handleFetch(data))
    }
}
 
export default App;