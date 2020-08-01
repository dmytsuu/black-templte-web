import React from 'react';
import Form from './Form.js'
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
    axios.get('http://localhost:3000/realmlist')
    .then((response => {
      this.setState(response.data)
    }))
  }

  render() {
    return (
      <div className="app">
        <Form/>
        <div className="realmlist">
          <p>Realm: { this.state.name }</p>
          { `set realmlist ${this.state.address}:${this.state.port}` }
        </div>
      </div>
    );
  }
}

export default App;
