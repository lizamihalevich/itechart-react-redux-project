import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        <h2>world</h2>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
