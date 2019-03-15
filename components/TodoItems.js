import React, {Component} from 'react'

class TodoItems extends Component{
  createTask(item){
    return <li key={item.key}>{item.text}</li>

  }
  render(){
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTask)

    return(
      <ul className="lists">{listItems}</ul>
    )
  }
}

export default TodoItems
