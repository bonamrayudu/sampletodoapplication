import './App.css';
import Todo from './Todo';
import Counters from './Counters';
import Componentsexp from './Componentsexp';
import Examples from './Examples';
import Example2 from './Example2';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Routes, Route, NavLink } from "react-router-dom";
function App() {
  const names={name:"bonam", purpose:"B" }
  return (
    <div className="App">
      <Todo />
      <Counters />
      {/* Pass a prop called 'name' */}
      <Componentsexp name="happy" purpose="interview" />
      <Componentsexp  {...names}/>
      <Examples/>
      <Example2/>
      
      <nav>
        <NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
        <NavLink to="/about" style={{ marginRight: "10px" }}>About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          
          </Routes>
    </div>
  );
}

export default App;
