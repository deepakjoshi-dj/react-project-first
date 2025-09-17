import UserClass from "./UserClass";
import UserFunctional from "./UserFunctional";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <UserClass name="John" location="Hyderabad" />
        </div>
        <div style={{ flex: 1 }}>
          <UserFunctional name="John" location="Hyderabad" />
        </div>
      </div>
    </div>
  );
};

export default About;
