import React, { Component, createFactory } from 'react';
import './Main.css';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            savedNotes: [],
            index: ""
        };
        
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
  //   app.get(express.json()).then(response => {
  //     this.setState({
  //       savedNotes: response.data
  //     });
  //   });
  // }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    }

    render() {
        return (
            
            <form id='p2' onSubmit={this.handleSubmit}>
                
               <p>Notes</p> 

                <textarea
                type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>
    
            </form>
        );
    };
}

export default Main;
