import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      shows: []
       
    }
    
  }

  componentDidMount() {  //lets get request invoke the website as soon as it is upload. This is for speed and priority.
    axios.get('/api/shows') //requesting data array from backend with axios.get request
    .then(response => {
      this.setState({shows: response.data})
    })
  }

  render() {
   const {shows} = this.state
   const mappedShows = shows.map((val,index) => {
     return (
      <div key={index}>
        <div>
          <h1>{val.show}</h1>
          <h2>{val.favChar}</h2>
        </div>
      <img src={val.img}/>
      </div>
     )
     
   })
    return (
      <div className="show-container">
        {mappedShows}
      </div>
    )
  }
}

export default App;