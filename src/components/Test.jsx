import { Component, useState } from "react";

function Test() {
  const [val, setValue] = useState();
  return <h1>sdsd</h1>;
}
// class can't use hooks
export class TestClass extends Component {
  state = { value: "Value" };
  componentDidMount() {
    console.log("Test");
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ value: "salama" });
          }}
        >
          Update
        </button>
        <h1>{this.state.value}</h1>
        <h2>{this.props.testProp}</h2>
      </div>
    );
  }
}
