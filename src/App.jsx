

import './App.css'
import {  ContextMovieProvider } from './components/ContextMovie'
import NavBar from './components/NavBar';

import LandingPages from './pages/LandingPages';

const App = () => {



  return (
    <ContextMovieProvider>
      <div>
        <NavBar />
        
          <LandingPages />
        
      </div>
    </ContextMovieProvider>
  );
}

export default App
