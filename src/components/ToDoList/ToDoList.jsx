import { Component } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

const mockToDoListData = [
  {
    checked: false,
    item: "task1",
  },
  {
    checked: true,
    item: "task2",
  },
  {
    checked: false,
    item: "task3",
  },
];

// "ToDoList" is a class component
// we define class component when we need state, and the state can change during the lifetime of a component
// we can use the internal state of a component to write logic inside render method so that when the state changes our component changes its rendered component as well
// a component has a state so that we can have functionality in our apps, without state every component would be static

// more info on the state: https://reactjs.org/docs/state-and-lifecycle.html

export class ToDoList extends Component {
  // here we declare the initial state
  // our state will hold information regarding the list of to-do items as well as the current value in the add new item input
  state = {
    toDoList: mockToDoListData,
    inputValue: "",
  };

  // removeItem is passed down to ToDoItem component and from there is triggered
  // we need to define it here because when here is the state the we want to change
  removeItem = (itemText) => {
    // "setState" will trigger a call of the render method of this component
    // without setState the component would not update its rendered component and the user wouldn't see anything change in the webpage
    // when we call setState we pass as an argument and object that will be merged to the current state
    this.setState({
      toDoList: this.state.toDoList.filter(
        (itemData) => itemData.item !== itemText
      ),
    });
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddItem = () => {
    this.setState({
      toDoList: [
        { checked: false, item: this.state.inputValue },
        ...this.state.toDoList,
      ],
      inputValue: "",
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="to-do-list">
        {this.state.toDoList.map((itemData, index) => (
          <ToDoItem
            key={index + itemData.item}
            checkValue={itemData.checked}
            label={itemData.item}
            removeItem={this.removeItem}
          />
        ))}

        <div className="add-item">
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddItem}>+</button>
        </div>
      </div>
    );
  }
}