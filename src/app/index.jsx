import { Provider } from "react-redux";

import Requests from "../components/Requests";

import { store } from "./../store";

import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <Requests />
    </Provider>
  );
}

export default App;
