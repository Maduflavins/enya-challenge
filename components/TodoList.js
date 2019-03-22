import React, {Component} from 'react'
import TodoItems from './TodoItems'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[
        {id:1,text:"boil egg" },
        {id:2, text:"code stuff"},
        {id:3, text: "sleep"}
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  addItem(e){
    if(this._inputElement.value!==""){
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState((prevState)=>{
        return{
          items: prevState.items.concat(newItem)
        }

      })

    }
    this._inputElement.value="";
    console.log(this.state.items);
    e.preventDefault();

  }
  deleteItem(key){
    let filteredItems = this.state.items.filter(function(item){
      return(item.key !== key)
    })
    this.setState({
      items:filteredItems
    })
  }
  render(){
    return(
      <div className="listMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  type="text" ref={(a)=>this._inputElement=a}placeholder="Enter todo" />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />

      </div>

    )
  }
}
 export default TodoList
