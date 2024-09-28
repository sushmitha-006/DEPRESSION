import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase-config';
import './App.css'; // Import your CSS file for styling
import Login from './extend/Login';
// Import components from both apps
import Main from './components/Home/Main.js';
import Resources from './pages/resources/Resources.js';
import Music from './components/Music/Music.js';
import Playlist from './components/Music/Playlist.js';
import SuccessfulStories from './components/Successstories/Successstories.js';
import Header from './components/Home/Header.js';
import Cards from './components/Cards/Cards.js';
import Therapist from './components/Therapist/Therapist.js';
import Event from "./components/Events/Event.js"
import GratitudePage from "./components/Gratitude/GratitudePage.js"
import Quiz from "./CBT/Quiz.js";
import Zoom from './zoom.js';
import Room from './room.js';



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
      } else {
        localStorage.removeItem('isAuth');
        setIsAuth(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={ <Login setIsAuth={setIsAuth} />} />
          
          {/* Protected Routes */}
          <Route path="/" element={isAuth ? <Main /> : <Navigate to="/login" />} />
          <Route path="/books" element={isAuth ? <Resources /> : <Navigate to="/login" />} />
          <Route path="/music/*" element={isAuth ? <Music /> : <Navigate to="/login" />} />
          <Route path="/playlist/:mood" element={isAuth ? <Playlist /> : <Navigate to="/login" />} />
          <Route path="/successfulstories" element={isAuth ? <SuccessfulStories /> : <Navigate to="/login" />} />
          <Route path="/cards" element={isAuth ? <Cards /> : <Navigate to="/login" />} />
          <Route path="/therapist" element={isAuth ? <Therapist /> : <Navigate to="/login" />} />
          <Route path="/events" element={isAuth ? <Event /> : <Navigate to="/login" />} />
          <Route path="/gratitude" element={isAuth ? <GratitudePage /> : <Navigate to="/login" />} />
          <Route path="/quiz" element={isAuth ? <Quiz /> : <Navigate to="/login" />} />
          <Route path="/connect" element={isAuth ? <Zoom /> : <Navigate to="/login" />} />
          <Route path="/room/:roomId" element={isAuth ? <Room /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
