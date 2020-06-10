import React from 'react';
import fire from '../../config/Fire';
import { Link } from 'react-router-dom';
// import { CartContext } from '../../CartContext';
import './product-list.css';
import '../../index.css';

class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        products: null
       };
      this.cart = [];
      // this.myRef = React.createRef();
    }

    getItems = async () => {
      fire.firestore().collection('product-list').get().then( snapshot => {
        // console.log(snapshot);
        const products = [];
        snapshot.forEach(doc => {
          const id = doc.id;
          const data = doc.data();
          products.push({id,...data})
        })
        return this.setState({ products: products });
        // console.log(this.state);
      }).catch(error => console.log(error));
    }

    addCart = (idProd, imgProd, nm, prc, dsp) => {
      let id = idProd,
          img = imgProd,
          name = nm,
          price = prc,
          stock = dsp,
          qty = document.getElementById("#btn-agregar-" + id).value,
          subtotal = qty * price;
      const data = {id, img, name, price, stock, qty, subtotal};
      this.cart.push(data);
      console.log(this.cart);
      localStorage.setItem('cartItems', JSON.stringify(this.cart))
    }

    componentDidMount() {
      // this.myRef.current.focus();
      this.getItems();
    }

    render () {
      return (
        <div className="ProductList">
          <div className="prod-top">
              <div className="prod-top-title">
                  <h2>Catálogo de Productos</h2>
              </div>
              <div className="prod-top-form">
                  <span className="text center">¿Qué estas buscando?</span>
                  <br/>
                  <input type="text" placeholder="Buscar producto" name="filterProd"/>
              </div>
          </div>

          <div className="product-list-container">
            {
              this.state.products && this.state.products.map( product => {
                return(
                  <div className="card" key={product.id}>
                      <img className="homeImg" src={require('../../assets/img/'+product.imagen)} alt=""/>
                      <div className="card-body">
                          <h6 className="card-title">Producto: {product.nombre}</h6>
                          <p className="card-text">Precio: $ {product.precio} <br/>
                              Unid. en Existencia: {product.disponible}</p>
                      </div>
                      <div className="button-group">
                          <div className="button-div">
                              <Link to={`/product-list/${product.id}`}>
                                <button className="button-next">Ver más</button>
                              </Link>    
                          </div>
                          <div className="button-div">
                              <button className="button-add" onClick={() => this.addCart(product.id, product.imagen, product.nombre, product.precio, product.disponible)}>Añadir</button>
                              <input id={"#btn-agregar-" + product.id} step={1} defaultValue={1} type="number" min={1} placeholder="1"/>
                          </div>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      );
    }
}

export default ProductList;
