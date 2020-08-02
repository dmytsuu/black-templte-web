import React from 'react';
import axios from 'axios';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmited: false,
      username: '',
      password: '',
    };
    this.usernameInput = React.createRef();
    this.baseState = { ...this.state };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  handleReset(event) {
    event.preventDefault();
    if (!window.confirm('Are you sure?')) return;
    this.setState(this.baseState);
    this.usernameInput.current.focus();
  }

  get isFormValid() {
    return this.state.username.length && this.state.password.length;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value} );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmited: true })
    axios.post('http://localhost:3000/accounts', { account: this.state })
      .then(response => {
        alert('Account created.')
      })
      .catch(err => {
        alert(err.response.data.join(', '))
        this.setState({ isSubmited: false })
      });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="form-control text-center" htmlFor="username">Username:</label>
          <input className="form-control" type="text" id="username" name="username" placeholder="Roguegodx" value={this.state.username} onChange={this.handleChange} ref={this.usernameInput}/>
        </div>
        <div className="form-group">
          <label className="form-control text-center" htmlFor="password">Password:</label>
          <input className="form-control" type="password" id="password" name="password" placeholder="******" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input  className="form-control btn btn-block" type="submit" value="Submit" disabled={this.state.isSubmited || !this.isFormValid}/>
          <button className="form-control btn btn-block" onClick={this.handleReset}>Reset</button>
        </div>
      </form>
    );
  }
}

export default Form;
