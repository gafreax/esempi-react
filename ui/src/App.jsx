import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return loggedIn ? 
    <Router>
      <Routes>
        <Route path='/' element={<Home setLoggedIn={setLoggedIn} />} />
        <Route path='/product/:productId' element={<Product  />} />
      </Routes>
    </Router>
    :
    <Login setLoggedIn={setLoggedIn}/>
}

export default App;
