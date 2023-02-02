import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Message from './Components/Message';
import Notifications from './Components/Notifications';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
           /*  <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} /> 
             <Route path="/signup" element={<SignUp/>} />
             <Route path="/messages" element={<Message/>} />
             <Route path="/notifications" element={<Notifications/>} />
             <Route path="/profile" element={<Profile/>} />
             
            
            {/* <Route path="*" element={<ErrorPage />}/> */}
          </Routes>
          
        </div>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
