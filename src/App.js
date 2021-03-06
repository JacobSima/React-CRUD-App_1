import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/pages/Navbar'
import Contacts from './components/contacts/Contacts'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import Add from './components/contacts/Add'
import {Provider }from 'react-redux'
import Edit from './components/contacts/Edit'
import store from './store'

class App extends Component {
 
  render() {
    return (
      <Provider store ={store}>
      <Router> 
        <div className="app">
            <Navbar/>
            <div className="container">
            <Switch>
               <Route exact path="/" component ={Contacts}/>
               <Route axact path="/about" component ={About}/>
               <Route exact path ="/contact/add"  component={Add}/>
               <Route exact path="/contact/edit/:id" component ={Edit} />
               <Route component={NotFound} /> 
           </Switch>
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
