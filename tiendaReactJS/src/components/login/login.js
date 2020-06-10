import React from 'react';
import fire from '../../config/Fire';
import './login.css';
import '../../index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fireErrors: '',
    };
  }

  handleChange = e => {
    const psw   = document.getElementById('password').value,
          button = document.querySelector('.btn');

    if (psw.length > 5) {
      button.removeAttribute('disabled');
      button.style.cursor = 'pointer';
    };
    this.setState({ [e.target.name]: e.target.value });
    // console.log(email, psw)
  }

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      this.setState.fireErrors = error.message
    }) 
  }

  render() {
    let errorNote = this.state.fireErrors ? 
      (<div className="Error">{this.state.fireErrors}</div>) : null;

    return (
      <div className="loginContainer">
        <div className="form-container">
          <form onSubmit={e => this.login(e)}>
              <h2 id="inicioSesion">Inicio de Sesión</h2>
              <br/>
              <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <br/>
                  <input id="email" value={this.state.email} name="email" type="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <br/>
                  <input id="password" value={this.state.password} name="password" type="password" onChange={this.handleChange}/>
              </div>
              <button disabled type="submit" className="btn loginButton">Ingresar</button>   
              {errorNote} 
          </form>
        </div> 
      </div>
    )
  }
}

export default Login;
