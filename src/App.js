import './App.css';
import Todo from './Todo';
import Counters from './Counters';
import Componentsexp from './Componentsexp';

function App() {
  return (
    <div className="App">
      <Todo />
      <Counters />
      {/* Pass a prop called 'name' */}
      <Componentsexp name="Rayudu" />
    </div>
  );
}

export default App;
