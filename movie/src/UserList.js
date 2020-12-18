import React, {Component} from 'react';
import axios from 'axios';



class UserList extends Component {
    state = { todos:[] };
    async componentDidMount(){
      let result = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({todos:result.data})
    }
      
    render(){
      return(
  
    <div className="App">
    {this.state.todos.length > 0 ? (
    <div className="res1" >
      <ul >
      {this.state.todos.map((todo)=>
    <li key={todo.name} class="list-group-item d-flex justify-content-between align-items-center">
   {todo.email}
    <span >
      <input type="checkbox" checked={todo.username}/>
    </span>
  </li>
   )}
    </ul>
    </div>
    ):(<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>)}
  </div>
      )
    }
  }

  export default UserList;