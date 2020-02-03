import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedNotes:[],
      value: ""
    };

    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   app.use(express.json()).then(response => {
  //     this.setState({
  //       savedNotes: response.data
  //     });
  //   });
  // }
  
  
  handleSubmit(event) {
    alert('Note: ' + this.state.savedNotes);
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      
          <Header />
          <Main/>
          <Sidebar />
          <Footer />
        
        <div>
        <button>Save</button>
        <button>Delete</button>
        <button>Edit</button>
        </div>
        
      </form>
  
    );
  }
}

export default App;

////////push7///////