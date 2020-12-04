import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import JumboTron from '../JumboTron/JumboTron';
// import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <JumboTron/>
      </Router>
    </div>
  );
}

export default App;
