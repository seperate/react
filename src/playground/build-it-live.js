console.log("Visibility Toggle Loaded");

const appRoot = document.getElementById("app");

let isVisible = false;

const showData = () => {
    if(isVisible){
        isVisible = false;
    }else{
        console.log(isVisible);
        isVisible = true;
    }
    renderApp();
}

const renderApp = () => {
  const wicket = (
    <div>
      <h1>Toggle Visibility App</h1>
      <button name="btnVisibility" onClick={showData}>{isVisible ? "Hide Visibility" : "Show Visibility"}</button>
      {isVisible ? <p>Benden sana yar olmaz</p> : ""}
    </div>
  );
  ReactDOM.render(wicket, appRoot);
};

renderApp();