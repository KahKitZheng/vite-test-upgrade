import "./App.module.scss";
import { useTextToSpeech } from "./hooks/useTextToSpeech";

function App() {
  const { selectedText, playSpeech } = useTextToSpeech();

  return (
    <div>
      <p styleName="wip">This is a work in progress</p>
      {selectedText && (
        <button onClick={playSpeech}>Play</button>
      )}
    </div>
  );
}

export default App;