/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, add } from "../Reducer/CounterReducer";

class Counter extends Component {
  render() {
    console.log(this.props);
    const { counterValue, payloadVal, increment, decrement, add } = this.props;
    return (
      <div>
        <div>
          <p>Counter Value: {counterValue}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>

          <br />
          <p>ADD with payload : {payloadVal}</p>
          <button onClick={() => add(50)}>ADD</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { val, newVal } = state.counter;
  return {
    counterValue: val,
    payloadVal: newVal,
  };
};

const mapDispatchToProps = { increment, decrement, add };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
