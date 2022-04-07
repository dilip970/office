import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import './style.css';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import List from './pages/List';
import EditList from './pages/EditList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/home' element={< Home />}></Route>
            <Route exact path='/navbar' element={< NavBar />}></Route>
            <Route exact path='/footer' element={< Footer />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/userdashboard' element={< UserDashboard />}></Route>
            <Route exact path='/list' element={< List />}></Route>
            <Route exact path='/editlist/:id' element={< EditList />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;