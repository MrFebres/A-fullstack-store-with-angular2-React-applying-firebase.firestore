import React from 'react';
import { Link } from 'react-router-dom';
// import { productLi } from '../../../assets/img/';
import '../home.css';
import '../../../index.css';

class Menu extends React.Component {
    render() {
      return ( 
         <div className="card-container-home">
            <div className="card-home">
                <img src={require('../../../assets/img/product-list.jpg')} className="homeImg" alt=""/>
                <div className="card-body">
                    <h3>Cátalogo</h3>
                    <br/>
                    <Link className="boton-home" to='/product-list' style={{ marginBottom: '10px' }}>
                        <button className="button">Ver más</button>
                    </Link>
                </div>
            </div>
            <div className="card-home">
                <img src={require('../../../assets/img/shopping-car.jpg')} className="homeImg" alt=""/>
                <div className="card-body">
                    <h3>Carrito</h3>
                    <br/>
                    <Link className="boton-home" to='/shop' style={{ marginBottom: '10px' }}>
                        <button className="button">Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
      )
    }
  }
  
  export default Menu;                  
                    
                    
                   