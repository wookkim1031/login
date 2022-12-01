import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App" id="root">
      <Router />
    </div>
  );
}

export default App;
