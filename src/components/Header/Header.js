import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
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
  //   app.use(express.json()).then(response => {
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

      <form id='p1'>

        <input placeholder="Name" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>


        <input placeholder="Title" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>

        <input placeholder="Date" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>
     

      </form>

    );
  }
}

export default Header;