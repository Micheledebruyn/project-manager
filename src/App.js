import React, { Component } from 'react';
import uuid from 'uuid';
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
        id: uuid.v4(),
        title: "Business Website",
        category: "Web design"

      },
      {
        id: uuid.v4(),
        title: "Travel Website",
        category: "Travel Agency"
      },
      {
        id: uuid.v4(),
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

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
      < AddProject addProject={this.handleAddProject.bind(this)}/>
      < Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
      );
  }
}

export default App;
