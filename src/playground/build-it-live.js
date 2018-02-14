console.log("Visibility Toggle Loaded");

const appRoot = document.getElementById("app");

let isVisible = false;

const showData = () => {
    // bu satir degeri oldugunun tersine ceviriyor
    isVisible = !isVisible;
    renderApp();
}

// && operatoru ile tekil logic karsilastirmalarda faydalanmak daha dogru... 

const renderApp = () => {
  const wicket = (
    <div>
      <h1>Toggle Visibility App</h1>
      <button name="btnVisibility" onClick={showData}>{isVisible ? "Hide Visibility" : "Show Visibility"}</button>
      {isVisible && ( <p>Benden sana yar olmaz</p> )}  
      </div>
  );
  ReactDOM.render(wicket, appRoot);
};

renderApp();