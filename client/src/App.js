import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/screens/Home"
import Login from "./components/screens/Login"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"
import Createpost from './components/screens/Createpost';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/signin">
      <Login/>
      </Route>

      <Route exact path="/signup">
      <Signup/>
      </Route>

      <Route exact path="/profile">
      <Profile/>
      </Route>

      <Route exact path="/createpost">
      <Createpost/>
      </Route>

    </BrowserRouter>
      
    
  );
}

export default App;
