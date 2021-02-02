import Navbar from "./components/layout/Navbar";
import Backimg from "./components/layout/Backimg";
import Solutions from "./components/layout/content/Solutions";
import Solutions2 from "./components/layout/content/Solutions2";
import Solutions3 from "./components/layout/content/Solutions3";
import Solutions4 from "./components/layout/content/Solutions4";
import Side from "./components/layout/content/Side";
import Person from "./components/layout/contact/Person";
import Contactform from "./components/layout/contact/Contactform";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Backimg />
        <Solutions />
        <Solutions2 />
        <Side />
        <Solutions3 />
        <Solutions4 />
        <Person />
        <Contactform />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
