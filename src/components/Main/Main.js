import React, { Component } from 'react';
// import "./Main.css";

class Main extends Component {
    render() {
        return (
            <div className='Main'>
               <h1>Main</h1> 

                <div>
                    <textarea rows="8" cols="50">
                    Take Notes
                    </textarea>
                </div>

            </div>
        );
    }
}

export default Main;