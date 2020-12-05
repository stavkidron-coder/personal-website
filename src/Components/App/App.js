import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Resume from '../Resume/Resume';
import Home from '../Home/Home';
// import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path='/' component={Home}/>
      </Router>
    </div>
  );
}

export default App;