import NavBar from '../NavBar/NavBar';
import HomeJumboTron from './HomeJumboTron/HomeJumboTron';
import AboutMe from './AboutMe/AboutMe';
import PreviousWork from './PreviousWork/PreviousWork';
import Footer from '../Footer/Footer';
import Skills from './Skills/Skills';

function Home() {
  return (
    <div className="App">
        <NavBar/>
        <HomeJumboTron/>
        <AboutMe/>
        <Skills/>
        <PreviousWork/>
        <Footer/>
    </div>
  );
}

export default Home;