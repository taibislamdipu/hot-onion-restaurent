
import React, { createContext, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import fakeData from './components/fakeData/fakeData'

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import MenuItem from './components/MenuItem/MenuItem';
import Navbar from './components/Navbar/Navbar';
import NoMatch from './components/NoMatch/NoMatch';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Navbar></Navbar>
      <Router>
        <Switch>

          <Route path="/home" >
            <Home></Home>
          </Route>

          <Route path="/menu" >
            <Menu></Menu>
          </Route>

          <Route path="/menuItem/:id" >
            <MenuItem fakeData={fakeData}></MenuItem>
          </Route>

          <Route path="/login" >
            <Login></Login>
          </Route>

          <PrivateRoute path="/placeOrder" >
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <Route exact path="/" >
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>

  );
};

export default App;
