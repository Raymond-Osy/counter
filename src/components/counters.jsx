import React, { Component } from "react";
import Counter from "./counter";


// I have to fix this bug. I want to dynamically delete each element in the list using the delete button. Visit mosh 50:00
class Counters extends Component {
  state = {
      counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
      ]
  };
  handleDelete = () => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
}
  render() {
    return (
      <div>
          {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete}/>)}
      </div>
    );
  }
}

export default Counters;
