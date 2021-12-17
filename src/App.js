import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import CourseDetail from './Pages/Home/CourseDetail/CourseDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import Payment from './Pages/Payment/Payment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Navigation from './Pages/Shared/Navigation/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />

          <Route path='/myorder' element={
            <PrivateRoute>
              <MyOrder />
            </PrivateRoute>
          }
          />

          <Route path='/courses/:courseId'
            element={
              <PrivateRoute>
                <CourseDetail />
              </PrivateRoute>
            }
          />

          <Route path='/payment/:paymentId' element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
          />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;