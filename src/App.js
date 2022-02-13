import React, { Component } from "react";

class App extends Component {
  state = {
    contador: 0,
  };

  add = () => {
    if (this.state.contador + 1 >= 10) {
      this.setState({ contador: 10 });
    } else {
      this.setState({ contador: this.state.contador + 1 });
    }
  };

  remove = () => {
    if (this.state.contador - 1 <= 0) {
      this.setState({ contador: 0 });
    } else {
      this.setState({ contador: this.state.contador - 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <h1>{this.state.contador}</h1>
        <button onClick={this.remove}>-</button>
      </div>
    );
  }
}

export default App;
