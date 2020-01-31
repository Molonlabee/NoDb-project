import React, { Component } from 'react';
// import "./Sidebar.css";
import VocabularyList from "./VocabularyList";
import "./Sidebar";

class Sidebar extends Component {
    constructor() {
        super();

        this.state = {
            Words: [],
            input: ""
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleInputChange(value) {
        this.setState({ input:value });
    }

    handleAddTask() {
        this.setState ({
            Words: [...this.state.Words, this.state.input],
            input: ""
        });
    }

    render() {
        let Words = this.state.Words.map((element,index) => {
            return <VocabularyList key ={index} task={element} />
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

                {Words}
            </div>
        );
    }
}

export default Sidebar;