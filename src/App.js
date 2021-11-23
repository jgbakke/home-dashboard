import './App.css';
import AppSelector from './AppSelector.js'

function App() {
  return (
    <div id="selector-panel">
        <AppSelector name="Market Update" />
        <AppSelector name="Game Sales" />
        <AppSelector name="NHL Scores" />
        <AppSelector name="COVID Stats" />
        <AppSelector name="Programming News" />
    </div>
  );
}

export default App;
