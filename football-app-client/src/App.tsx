import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { HighlightsScreen } from "./components/highlights-screen";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HighlightsScreen />
      </Provider>
    </div>
  );
}

export default App;
