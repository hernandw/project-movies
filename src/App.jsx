

import './App.css'
import MyRoutes from './Routes/MyRoutes';
import {  ContextMovieProvider } from './components/ContextMovie'


const App = () => {



  return (
    <ContextMovieProvider>
      <div>
        <MyRoutes />
       
        
      </div>
    </ContextMovieProvider>
  );
}

export default App
