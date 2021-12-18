import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Admin from './Pages/Dashboard/Admin/Admin';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import Review from './Pages/Dashboard/Review/Review';
import CourseDetail from './Pages/Home/CourseDetail/CourseDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MyOrder from './Pages/MyOrder/MyOrder';
import Payment from './Pages/Payment/Payment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/home' element={<Home />} />


          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          >
            <Route path='/dashboard' element={<MyOrder />} />
            <Route path='/dashboard/myorder' element={<MyOrder />} />
            <Route path='/dashboard/admin' element={<Admin />} />
            <Route path='/dashboard/review' element={<Review />} />
            <Route path='/dashboard/manageproduct' element={<ManageProduct />} />
          </Route>

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
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;