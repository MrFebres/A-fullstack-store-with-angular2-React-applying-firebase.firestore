import React from 'react';
import fire from './config/Fire'
import Login from './components/login/login';
import Home from './components/home/home';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user != null || 'undefined') {
        this.setState({user});
      }else{
        this.setState({user: null});
      }
    });
  }

  render(){
    return (
        <div className="App">
          {this.state.user ? (<Home />) : (<Login />)}
        </div>  
    );
  }
}
  
export default App;
  
