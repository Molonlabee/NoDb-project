import React, { Component } from 'react';

import "./Sidebar";

class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            words: [],
            input: ""
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleInputChange(value) {
        this.setState({ input:value });
    }

    handleAddTask() {
        this.setState ({
            words: [...this.state.words, this.state.input],
            input: ""
        });
    }

    render() {
        let words = this.state.words.map((element,index) => {
            return <words key ={index} task={element} />
        })
        return (
            <div className="Sidebar">

               <h1>Vocabulary List</h1>
               
                <div>
                    <input value={this.state.input}
                        placeholder= "Vocabulary"
                        onChange={e => this.handleInputChange(e.target.value)}/>
                
                    <button onClick={this.handleAddTask}>Add</button>
                    <button onClick={this.handleSubTask}>Delete</button>
                </div>

                <br />

                {words}
            </div>
        );
    }
}

export default Sidebar;