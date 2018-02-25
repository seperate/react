console.log("App.js is running!");

const template = <h1>Indecision Application Hooray!</h1>;

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};



const removeAll = () =>{
  app.options = [];
  renderForm();
}

const onFormSubmit = e => {
  e.preventDefault();
  console.log("Form submitted!");
  let option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderForm();
};

// Bunu da gormek istedim

const renderForm = () => {
  const appRoot = document.getElementById("app");

  const templateThree = (
    <div>
      <h1>{app.title} </h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No options</p>
      )}
      <p>{app.options.length}</p>
      
      <button onClick={removeAll}>Kill Them All</button>

      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>Option : {option}</li>;
          })
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
};

renderForm();
