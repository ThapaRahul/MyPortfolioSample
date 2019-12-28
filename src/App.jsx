import React, { Component } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Introduction from "./components/Introduction.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Projects />
            <Timeline />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
