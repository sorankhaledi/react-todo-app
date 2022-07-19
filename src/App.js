import Home from './components/home/Home';
import {BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Home />
      </div>
    </Router>
  );
}

export default App;
