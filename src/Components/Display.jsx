/* eslint-disable react-refresh/only-export-components */
// YourClassComponent.js
import { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../Reducer/FetchAPIReducer";

class Display extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, data, error } = this.props;

    if (loading === "pending") {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        {data.map((e, i) => {
          return (
            <div key={i}>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { loading, data, error } = state.fetchAPI;
  return { loading, data, error };
};

export default connect(mapStateToProps, { fetchData })(Display);
