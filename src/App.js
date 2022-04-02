import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className=" dark:bg-gray-900  dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
