import React from 'react';
import fire from '../../config/Fire';
import { Link } from 'react-router-dom'
import './nav.css';
import '../../index.css';

class Nav extends React.Component {
    logOut = () => {
      fire.auth().signOut();
    }

    render() {
      return ( 
        <div className="barraNav">
            <div className="barra-menor">
                <h3 className="brand-logo">La Bodega</h3>
            </div>    

            <div className="barra-menor">
                <ul className="navbar-nav">
                  <Link to='/'>
                    <li><i className="material-icons">dashboard</i></li>
                  </Link>
                  <Link to='/shop'>
                    <li><i className="material-icons">shopping_cart</i></li>
                  </Link>
                  <Link to='/product-list'>
                    <li><i className="material-icons">inbox</i></li>
                  </Link>
                  <Link to='/'>
                    <li><i onClick={this.logOut} className="material-icons">keyboard_tab</i></li>
                  </Link>
                    

                </ul>
            </div>

        </div>
      )
    }
  }
  
  export default Nav;
