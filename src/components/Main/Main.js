import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            newNotes: [],
            index: ""
        };
        
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
  //   app.use(express.json()).then(response => {
  //     this.setState({
  //       newNotes: response.data
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
                
               <p>Main</p> 

                <textarea
                type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>
    
            </form>
        );
    };
}

export default Main;