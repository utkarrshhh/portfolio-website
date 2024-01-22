// import React, { Component } from 'react';

import React, { Component } from "react";
import BrowserApp from "./Components/Navbar/BrowserApp";
import CenterBody from "./Components/CenterBody/CenterBody";
import BottomBody from "./Components/BottomBody/BottomBody";
import Contact from "./Components/Bottomest/ContactForm";

export default class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <BrowserApp />
        <CenterBody />
        <BottomBody />
        <Contact />
      </div>
    );
  }
}

// export default App;
