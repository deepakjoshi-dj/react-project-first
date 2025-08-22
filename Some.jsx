export const jsxheading = <h1>Hello world from jsx</h1>;

const WelcomeComponent = () => {
  return <h1>Hello Guest, Good Evening!</h1>;
};

const HeadingComponent = () => {
  const a = 10;
  const b = 20;
  return (
    <div>
      {jsxheading}
      {a + b}
      <WelcomeComponent />
      <h2>Hello World From Functional Component</h2>
    </div>
  );
};

export default HeadingComponent;
