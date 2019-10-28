import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleDemoUser = this.handleDemoUser.bind(this),
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value 
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    let demo = {username: "Demo", password: "123456" }

    this.props.action(demo);
  }


  renderErrors() {
    return (
      <ul>
        { this.props.errors.map((error, i) => (
          <li key={ `error-${i} `}>
            { error }
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="front-container">
        <div className="session-img">
          
        </div>
        <div className="login-form-container">
          <div className="logo"></div>
          <form onSubmit={this.handleSubmit} className="login-form-box" >
            <div className="text-container">
              Welcome To Instagram Clone!
              <br />
              <span className="br1">Please {this.props.formType} or {this.props.navLink}</span>
              <br />
              <button className="demo" onClick={ this.handleDemoUser }>demo</button>
            </div>
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input"
                />
              </label>
              <br />
              <label>
                <input type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input" 
                  />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>     
      </div>
    );
  }
}


export default SessionForm;