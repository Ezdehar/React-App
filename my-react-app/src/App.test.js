import React from "react";
import ReactDOM from "react-dom";
import App from "/Users/ezdeharjaber/Documents/cwru/React-App/my-react-app/src/App.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
