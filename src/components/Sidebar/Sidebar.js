import React, { Component } from 'react';

import "./Sidebar";

class Sidebar extends Component {
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
            
            <div onSubmit={this.handleSubmit}>
            
               <p>Sidebar</p> 

                <textarea rows="10" cols="200" 
                type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>
    
            </div>
        );
    };
}

export default Sidebar;