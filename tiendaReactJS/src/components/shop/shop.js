import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import './shop.css';
import '../../App.css'

class Shop extends React.Component {
  constructor() {
    super();
    this.total = '';
    this.cartList = [];
  }

  componentWillMount = () => {
    this.getCart();
  }

  getCart = () => {
    const data = localStorage.getItem('cartItems');
    this.cartList = JSON.parse(data);
    // console.log(this.cartList)
    this.getTotal(this.cartList);
    return this.cartList;
  }

  clearCart = () => {
    localStorage.clear();
    this.cartList = [];
  }

  getTotal = (obj) => {
    let arr = obj;
    if (obj != null) {
      this.total = arr.reduce((acc, curr) => acc + curr.subtotal, 0);
    } else {
      this.total = 0;
    }
    // console.log(this.total)
    return this.total;
  }

  confirmBuy = () => {
    this.cartList.forEach(data => {
      let idD = data.id,
          qty = data.qty,
          oldValue = data.stock,
          docRef = fire.firestore().collection('product-list').doc(idD);
        console.log(docRef);
        docRef.update({
          disponible: oldValue - qty
        })
      
    })
    // localStorage.clear();
    // this.cartList = [];
  }


  render () {
    return (
      <div className="shoppingCart">
        <div className="prod-top">
            <div className="prod-top-title">
                <h2>Carrito de Compras</h2>
            </div>
        </div>

        <div className="cart-container">
          <div className="buy-list">
        {
          this.cartList && this.cartList.length > 0 ? this.cartList.map(data => {
            return (
              <div className="buy-items" key={data.id}>
                  <div className="img-subtotal">
                      <img id="cart-img" src={require('../../assets/img/'+data.img)} alt=""/>
                      <span style={{marginLeft: '1em'}}><b>Subtotal: {data.subtotal}</b>$ </span>
                  </div>

                  <div className="buy-details" style={{marginLeft: '1em'}}>
                      <h2>{data.name}</h2>
                      <span><b>Unidades: {data.qty}</b></span>
                  </div>
              </div>
            )
          }) : (
            <div className="empty-cart">
              <span style={{fontSize: '1.5em'}}>Tu carrito  de compras esta vacío</span>
            </div>
          )
        }
          </div>
          <div className="total-container">
            <h2>Total: $ {this.total}</h2>
            <div className="pay-button">
              <Link className="link" to='/'>
                <button onClick={this.clearCart}>Cancelar</button>
              </Link>
              <Link className="link" to="/">
                <button onClick={() => this.confirmBuy()}>Pagar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
   );
 }
}

export default Shop;
