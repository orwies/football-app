import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { HighlightGrid } from "./components/highlights-list";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HighlightGrid />
      </Provider>
    </div>
  );
}

export default App;
