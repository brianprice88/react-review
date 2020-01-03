import React from 'react';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          todo: '',
          todos: [] 
        }
     this.onChangeHandler = this.onChangeHandler.bind(this);
     this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

onChangeHandler(e) {
  this.setState({
    [e.target.name]: e.target.value  
  })
}

onSubmitHandler(e) {
  e.preventDefault();
  let currentTodos = this.state.todos
  currentTodos.push(this.state.todo);
  this.setState({
      todos: currentTodos,
      todo: ''
  })
  document.getElementById('form').reset();
}
    render() {
        return (
          <div>
            <form id='form' onSubmit = {this.onSubmitHandler}>
              <label>
                New Todo:
                <input name="todo" required onChange={this.onChangeHandler}/>
              </label>
              <input type='submit' />
            </form>
            <ul>
            {this.state.todos.map((todo, index) => (
              <ListEntry todo={todo} key={index} index={index} />
            ))}
            </ul>
          </div>
        )
    }
}


export default List