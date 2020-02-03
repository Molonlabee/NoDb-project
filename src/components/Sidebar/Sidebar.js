import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            savedNotes: [],
            value: ""
        };
        
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

//     componentDidMount() {
//     app.create(express.json()).then(response => {
//       this.setState({
//         savedNotes: response.data
//       });
//     });
//   }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'textarea' ? target.textarea : target.value;
    }


    render() {
        return (
            
            <form id='p3' onSubmit={this.handleSubmit}>
            
               <p>Vocabulary</p> 

                <textarea 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange}/>
    
            </form>
        );
    };
}

export default Sidebar;