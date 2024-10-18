import './App.css';
import Todo from './Todo';
import Counters from './Counters';
import Componentsexp from './Componentsexp';
import Examples from './Examples';
import Example2 from './Example2';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Routes, Route, NavLink } from "react-router-dom";
import { createContext, useState } from 'react'; // Import useState
import Profile from './Profile';
export const UserContext = createContext(); // Export UserContext

function App() {
  const names = { name: "bonam", purpose: "B" };
  const [user, setUser] = useState({ name: "John Doe" });

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Todo />
        <Counters />
        {/* Pass a prop called 'name' */}
        <Componentsexp name="happy" purpose="interview" />
        <Componentsexp {...names} />
        <Examples />
        <Example2 />
        <Profile/>

        <nav>
          <NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
          <NavLink to="/about" style={{ marginRight: "10px" }}>About</NavLink>
          <NavLink to="/contact" style={{ marginRight: "10px" }}>Contact</NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
