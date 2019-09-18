import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import DairyDept from './components/DairyDept';
import Main from './components/Main'
import StoreHeader from './components/StoreHeader'

function App() {
  return (
	  <Router>
		  <Route path='/' component={NavBar}></Route>
		  <Route path='/' component= {StoreHeader}></Route>
		  <Route exact path='/' component={Main}></Route>
		  <Route path='/frozen' component={FrozenDept}></Route>
		  <Route path='/meat' component={MeatDept}></Route>
		  <Route path='/dairy' component={DairyDept}></Route>
	  </Router>
  );
}

export default App;
