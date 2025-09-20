import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      name: "dummy",
      location: "dummy",
    };
    // console.log(`${props?.name} children constructor runs`);
  }
  async componentDidMount() {
    // console.log(`${this?.props?.name} children component did mount.`);
    const response = await fetch("https://api.github.com/users/deepakjoshi-dj");
    const json = await response.json();
    // console.log(json);
    this.setState({
      name: json?.login,
      location: "Hyderabad",
    });
  }
  // componentDidMount() {
  //   // console.log("component did mount");
  //   this.timer = setInterval(() => {
  //     console.log("hello world");
  //   }, 1000);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.count !== prevState?.count) {
  //     console.log("component did update");
  //   }
  //   if (this.state.count2 !== prevState?.count2) {
  //     console.log("component did mount count2");
  //   }
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);

  //   // console.log("component will unmount");
  // }

  render() {
    // const { name, location } = this?.props;
    const { count, count2, name, location } = this?.state;
    // console.log(`${name} children render method runs`);
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
