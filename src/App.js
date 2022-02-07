import './App.css';

import About from "./About";
import Contact from "./Contact";
import Home from "./Home"
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


function App() {
  // const [clothes, setClothes] = useState(data);
  // const chosenClothes = (category) => {

  //   const temp = data.filter( element => element.searchTerm === category);
  //   setClothes(temp);
  // }
  return (
    <div>
    <Router>
      <nav  className='navBar'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/About" className='link'> About</Link>
    <Link to="/Contact" className='link'>Contact</Link>
    </nav>
    <Routes>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element ={<Contact/>}></Route>
      <Route path="/" element ={<Home/>}></Route>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
