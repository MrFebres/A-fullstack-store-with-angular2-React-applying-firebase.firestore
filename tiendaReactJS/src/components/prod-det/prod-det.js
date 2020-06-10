import React from 'react';
import fire from '../../config/Fire';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';
import './prod-det.css';
import '../../index.css';

class ProdDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  getDetail = async () => {
    const idProd = this.props.match.params.id;
    // console.log(idProd);
    fire.firestore().collection('product-list').where(firebase.firestore.FieldPath.documentId(), "==", idProd).get()   
    .then( snapshot => {
      const product = [];
      snapshot.forEach(doc => {
        const id = doc.id,
              data = doc.data();
        product.push({id,...data})
      })
      this.setState({product: product})
      // console.log(this.state);
    }).catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.getDetail();
  }

  render () {
    return (
      <div className="card">
        {
          this.state.product.map( product => {
            return(
              <div className="det-container" key={product.id}>
                  <div className="img-detail">
                      <img src={require('../../assets/img/'+product.imagen)} alt=""/>
                  </div>
                  <div className="det-container-content" style={{padding: '2%', fontFamily: 'sans-serif'}}>
                      <div className="card-title">
                          <h3>Producto: {product.nombre}</h3>
                      </div>
                      <div className="card-content" style={{padding: '2%', fontFamily: 'sans-serif'}}>
                          <p>{product.descripcion}</p>
                          <br/>
                          <p>Disponibles: {product.disponible}</p>
                      </div>
                      <Link className="boton-home" to='/product-list' style={{ marginBottom: '10px' }}>
                        <button className="button" style={{ width: '100%'}}>Ir atrás</button>
                    </Link>
                  </div>
              </div>
            )
          })
        }   
      </div>
    );
  }
}

export default ProdDet;
