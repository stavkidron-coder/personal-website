import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Resume from '../Resume/Resume';
import Home from '../Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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