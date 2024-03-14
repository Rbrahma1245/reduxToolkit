/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../Reducer/TodoReducer";

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    const { id, name } = this.props.todoList;
    const { deleteItem } = this.props;

    return (
      <div style={{ background: "lightblue" }}>
        <ul>
          <li>{name}</li>

          <button onClick={() => deleteItem(id)}>Delete</button>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
const mapDispatchToProps = { deleteItem };
export default connect(mapStateToProps, mapDispatchToProps)(Card);
