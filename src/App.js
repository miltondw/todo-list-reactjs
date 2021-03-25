import React,{Component} from 'react';

import './styles/App.scss';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';


class App extends Component{

  state={
    tasks:tasks
  }
  addTask = (title,description)=>{
     console.log(title,description)
  }
  render(){
    return(
      <div>
        <TaskForm addTask={this.addTask}/>
      <Tasks task={this.state.tasks} />
      </div>
    );
  }
}

export default App;
