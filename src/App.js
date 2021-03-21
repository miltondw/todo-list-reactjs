import React,{Component} from 'react';
import './App.css';
import Task from './sample/tasks.json'
console.log(Task)
class App extends Component{
  render(){
    return(
      <div>
        <h1>Tasks</h1>
      </div>
    );
  }
}

export default App;
