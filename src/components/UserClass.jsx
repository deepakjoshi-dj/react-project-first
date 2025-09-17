import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this?.props;
    const { count, count2 } = this?.state;
    return (
      <div>
        <h1>User Details Class Component</h1>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Count : {count}</h3>
        <h3>Count2 : {count2}</h3>
        <div style={{ display: "flex", gap: 5 }}>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Inc Count
          </button>
          <button
            onClick={() => {
              this.setState({
                count2: this.state.count2 + 2,
              });
            }}
          >
            Inc Count2
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
