import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
      // Own data: not a clean way to place data here, better to
      // create projects: and than pass the data through
      // ComponentWillMount
      ]
    }
  }

  componentWillMount() {
    // Place to call api for data
    // lifecycle method, to check when it fires off
    this.setState({projects: [
      {
        title: "Business Website",
        category: "Web design"

      },
      {
        title: "Travel Website",
        category: "Travel Agency"
      },
      {
        title: "Monkey Business",
        category: "Non Sense"
      }
      ]});
  };
handleAddProject(project){
  // here add to the state of the main component
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});
}


  render() {
    return (
      <div className="App">
      < AddProject addProject={this.handleAddProject.bind(this)}/>
      < Projects projects={this.state.projects} />
      </div>
      );
  }
}

export default App;
