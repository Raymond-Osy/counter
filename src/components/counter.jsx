import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
      let classes = this.getBadgeClasses();

    return (
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            {console.log(this.props)}
        </div>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : this.state.value;
  }
}

export default Counter;
