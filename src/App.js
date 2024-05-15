import Bongo from "./Bongo";
import "./Bongo.css";
import GitHubRepo from "./GitHubRepo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Bongo />

        <GitHubRepo />
      </div>
    </div>
  );
}

export default App;
