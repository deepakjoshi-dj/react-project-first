import UserClass from "./UserClass";
// import UserFunctional from "./UserFunctional";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor runs.");
  }
  /**
   * parent constructor runs
   * parent render method runs
   *      first children constructor runs
   *      first children render method runs
   *      second children constructor runs
   *      second children render method runs
   *
   *      first children component did mount
   *      second children component did mount
   *
   * parent component did mount.
   *
   */
  // componentDidMount() {
  //   console.log("parent component did mount");
  // }
  render() {
    // console.log("parent render method runs.");
    return (
      <div>
        <h1>About Us Page</h1>
        <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
          <UserClass name="first" location="Hyderabad" />
          {/* <UserFunctional name="first" location="Hyderabad" /> */}
        </div>
      </div>
    );
  }
}

export default About;
