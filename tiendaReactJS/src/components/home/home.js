import React from 'react';
// import fire from '../../config/Fire';
import Nav from '../nav/nav';
import Menu from './main-menu/main-menu';
import ProductList from '../product-list/product-list';
import ProdDet from '../prod-det/prod-det';
import Shop from '../shop/shop';
import './home.css';
import '../../index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Home extends React.Component {
    render() {
      return ( 
        <Router>
            <div className="homeContainer">
                <Nav />
                <div className="main-container">
                    <Switch>
                        <Route path="/" exact component={Menu}/>
                        <Route path="/product-list" exact component={ProductList}/>
                        <Route path="/product-list/:id" exact component={ProdDet}/>
                        <Route path="/shop" component={Shop}/>
                    </Switch>
                </div>
            </div>
        </Router>
      )
    }
  }
  
  export default Home;