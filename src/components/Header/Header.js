import React, { Component } from "react";



class Header extends Component {
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

      <form>
        <p>Header</p>

      <div>

        <input placeholder="Name" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>

        <input placeholder="Date" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>

        <input placeholder="Title" type="text" 
                value={this.state.value} 
                onChange={this.handleInputChange}/>

      </div>

      </form>

    );
  }
}

export default Header;