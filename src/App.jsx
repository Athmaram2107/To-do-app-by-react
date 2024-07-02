import InlineComponent from "./assets/InlineComponent";
import OuterComponent from "./assets/OuterComponent";
import OutlineComponent from "./assets/OutlineComponent";
import Todo from "./assets/Todo";
import ExternalComponent from "./assets/externalComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "yellow",
          fontWeight: "bold",
          textAlign: "center",
          padding: "10px",
          height: "50px",
          fontSize: "2em",
          boxShadow: "0 4px 6px 2px rgba(0,0,0,0.2)",
        }}
      >
        My Todo List
      </h1>
      <Todo />
    </div>
  );
}

export default App;
