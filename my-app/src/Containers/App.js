import React from "react";
import "./App.css";
import Navbar from "../Components/Navbar";

class App extends React.Component {
  state = {
    title: "Quizitivity",
    login: "Login:",
  };

  render() {
    const state = this.state;
    return (
      <div className="container mt-5">
        <Navbar
          title={state.title}
          login={state.login}
        />
      </div>
    );
  }
}

export default App;
