import './App.css';
import './proxima-nova.css'
import AppSelector from './AppSelector.js'

function App() {
    return (
        <>
            <div id="selector-panel">
                <AppSelector name="Market Update" />
                <AppSelector name="Game Sales" />
                <AppSelector name="NHL Scores" />
                <AppSelector name="COVID Stats" />
                <AppSelector name="Programming News" />
            </div>
            <div id="app-body">
                <p class="tk-proxima-nova">Please select an app to use.</p>
            </div>
        </>
  );
}

export default App;
