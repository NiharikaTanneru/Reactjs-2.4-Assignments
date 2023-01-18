import './App.css';
import Myheader from './components/Myheader';
import NavigationMenu from './components/NavigationMenu';
import MainContent from './components/MainContent';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Myheader />
        <NavigationMenu />
        <div className="Info">
        <Content/>
        <MainContent />
        <Content />
        </div>
        <Footer />
    </div>
    
  );
}

export default App;
