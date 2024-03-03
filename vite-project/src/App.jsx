
import { useState } from 'react';

import './App.css';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './component/CreateAccount';
import Home from './component/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/signup" element={<CreateAccount />} /> */}
        {/* <Route path="/login" element={<Login />} />
         */}
         <Route path='/' element={<CreateAccount/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
