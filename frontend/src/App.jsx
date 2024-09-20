import {useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import axios from 'axios'; //new


function App() {
  //new
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(''); // Define the email state

  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUserEmail={setLoggedInUserEmail} />} />
        <Route
          path='/home'
          element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={loggedInUserEmail} />}
        />
        {/* <Route path='/home' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
