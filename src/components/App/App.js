import React from 'react';
import Form from '../Form/Form'
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      port: '',
      name: ''
    }
  };

  componentDidMount() {
    axios.get('https://bt-api.pantsu.vision/realmlist/')
    .then((response => {
      this.setState(response.data)
    }))
  }

  render() {
    return (
      <div className="app">
        <h2 className="heading">Create Account</h2>
        <Form/>
        <div className="realmlist">
          <h2 className="heading">Connection Details</h2>
          <p>Realm: { this.state.name }</p>
          { `set realmlist ${this.state.address}:${this.state.port}` }
        </div>
      </div>
    );
  }
}

export default App;
