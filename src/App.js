import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import CheckOut from './Pages/CheckOut/CheckOut';
import CourseDetail from './Pages/Home/CourseDetail/CourseDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Payment from './Pages/Payment/Payment';
import Navigation from './Pages/Shared/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;