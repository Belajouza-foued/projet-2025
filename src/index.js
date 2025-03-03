import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import Profile from './pages/Profile';
const App = () => {
   return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Login />}/>
        <Route path="register" element={<Register />}/>
        <Route path="profile" element={<Profile />}/>
        </Route>
      </Routes>
       </BrowserRouter>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
    
  

