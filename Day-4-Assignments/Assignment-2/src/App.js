
import './App.css';
import Menu from './components/Menu';
import Image from './components/Image';
import Cards from './components/Cards';
import Info from './components/Info';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Image />
      <div class="center">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      <Info />
      <Footer />
    </div>
  );
}

export default App;
