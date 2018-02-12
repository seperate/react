console.log("App.js is running!");

const template = <h1>Indecision Application Hooray!</h1>;

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

const templateThree = (
  <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var user = {
  name: "Eyup",
  surname: "Cingel",
  age: 26,
  location: "Istanbul"
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unknown";
  }
}

const templateTwo = (
  <div>
    <h1>
      Name : {user.name} {user.surname}{" "}
    </h1>
    <h2>Age : {user.age} </h2>
    <h2>Location : {getLocation(user.location)} </h2>
  </div>
);

let count = 0;
const minusOne = () => {
  count--;
  renderApplication();
};

const reset = () => {
  count = 0;
  renderApplication();
};

const addOne = () => {
  count++;
  renderApplication();
};


const appRoot = document.getElementById("app");

const renderApplication = () => {
  const templateFour = (
    <div>
      <h1>Count : {count}</h1>
      <button id="btnPlus" onClick={addOne}>
        +1
      </button>
      <button id="btnMinus" onClick={minusOne}>
        -1
      </button>
      <button id="Reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
  ReactDOM.render(templateFour, appRoot);
};

renderApplication();