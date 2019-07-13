import React, { Component } from "react";
import Counter from "./counter";


// I have to fix this bug. I want to dynamically delete each element in the list using the delete button. Visit mosh 50:00
class Counters extends Component {
  render() {
    const {counters, onReset, onDelete, onIncrement} = this.props;
    console.log('Counters - Rendered');
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        />
        ))}
      </div>
    );
  }
}


/**
 * The bug am having now is that, once the page rerenders and the state changes
 * the increament button is called accross all buttons
 * Then when i try to set the state of the new counter after it has been incremented,
 * it throws an error concerning the use of states
*/
export default Counters;
