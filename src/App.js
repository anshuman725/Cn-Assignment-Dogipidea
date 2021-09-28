// import Dog from "./Dog";

const Dog = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.weight),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  var arr = [1, 2, 3, 4,5,6];
  return React.createElement("div", { id: "website-title" }, [
    React.createElement("h3", {}, "Dog Website"),
    ...[arr].map((item) => React.createElement("h3", {}, item)),
    React.createElement(Dog, {
      name: "Bull Terrier",
      weight: "50.70kg",
      breed: "Terrier",
    }),
    React.createElement(Dog, {
      name: "PitBull",
      weight: "40.80kg",
      breed: "BULL",
    }),
    React.createElement(Dog, {
      name: "Husky",
      weight: "40.60kg",
      breed: "S-Husky",
    }),
    React.createElement(Dog),
    React.createElement(Dog),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
