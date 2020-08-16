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
      name: '',
      downloadClientLink: 'https://download.wowlibrary.com/tbc/TBC-2.4.3.8606-enGB-Repack.7z',
      discordLink: 'https://discord.gg/96CeRd'
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
        <div className="connect">
          <h2 className="heading">Connection Details</h2>
          <p>Realm: { this.state.name }</p>
          { `set realmlist ${this.state.address}:${this.state.port}` }
        </div>
        <a href={this.state.downloadClientLink}>
          <h2 className="heading link">Download Client</h2>
        </a>
        <a href={this.state.discordLink}>
          <h2 className="heading link">Join Discord</h2>
        </a>
      </div>
    );
  }
}

export default App;
