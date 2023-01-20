import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
function App() {

  return ( 
    <div className="App">
      <Header title=" Web Developer" name="John Smith" /> 
       <Navbar />
       <AboutMe />
       <MyProjects />
       <ContactMe heading="Contact Me" />
       <Footer /> 
    </div>
  );
}

export default App;
