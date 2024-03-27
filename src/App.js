import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
       <div className="container">
       <TextForm/>
       </div>
       {/* <About/> */}
       

       </Router>
    </div>

  );
}

export default App;
