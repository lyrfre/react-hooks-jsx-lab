import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  console.log(NavBar)
  console.log(Home)
  console.log(About)
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
