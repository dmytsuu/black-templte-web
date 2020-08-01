import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmited: false,
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      .then((result) => {
        alert('Account created.')
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit" disabled={this.state.isSubmited || !this.isFormValid}/>
      </form>
    );
  }
}

export default Form;
