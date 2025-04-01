import "./App.module.scss";
import Button from "./Button";

function App() {
  return (
    <div styleName="wip">
      <p>
        With old compiler <button>button</button>
      </p>
      <p>
        With just CSS modules <Button />
      </p>
    </div>
  );
}

export default App;
