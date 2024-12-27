import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Wetaher App</h1>
        <Weather defaultCity="Goa" />
        <footer>
          This project was coded by Isha and is
          <a
            href="https://github.com/IshaHarmalkar/my-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
