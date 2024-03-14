/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../Reducer/TodoReducer";
import Card from "./Card";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  handleAddItem(e) {
    e.preventDefault();

    if (this.state.item == "") {
      alert("Please add item list");
    } else {
      let id = new Date().getMilliseconds();
      this.props.addItem({ id: id, name: this.state.item });
      this.setState({ item: "" });
    }
  }
  render() {
    const { item } = this.state;
    const { todoList } = this.props;

    return (
      <div>
        <form>
          <input
            type="text"
            name="itemName"
            value={item}
            onChange={this.handleChange.bind(this)}
            placeholder="Enter Item you want to add..."
          />
          <button onClick={this.handleAddItem.bind(this)}>ADD</button>
        </form>

        {/* DISPLAY ITEM LIST */}

        {todoList.map((e) => {
          return <Card key={e.id} todoList={e} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.todo);
  const { todoList } = state.todo;
  return { todoList };
};
const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
