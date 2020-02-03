import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
            
            <form id='p4' onSubmit={this.handleSubmit}>
            
               <p>Footer</p> 

                <textarea
                type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>
    
            </form>
        );
    };
}

export default Footer;