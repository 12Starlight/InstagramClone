import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleDemoStark = this.handleDemoStark.bind(this);
    this.handleDemoAngelina = this.handleDemoAngelina.bind(this);
    this.handleDemoSarah = this.handleDemoSarah.bind(this);
    this.handleDemoBrad = this.handleDemoBrad.bind(this);
    this.handleDemoFoodie = this.handleDemoFoodie.bind(this);
    this.handleDemoMusic = this.handleDemoMusic.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enter = this.enter.bind(this); 
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

  // Demo Users
  handleDemoStark(e) {
    e.preventDefault();
    let stark = {username: "Tony Stark", password: "123456" }

    this.props.action(stark);
  }
  handleDemoAngelina(e) {
    e.preventDefault();
    let angel = {username: "Angelina Jolie", password: "123456" }

    this.props.action(angel);
  }
  handleDemoSarah(e) {
    e.preventDefault();
    let sarah = { username: "Sarah Avengleu", password: "123456" }

    this.props.action(sarah);
  }
  handleDemoBrad(e) {
    e.preventDefault();
    let brad = {username: "Brad Jessin", password: "123456" }

    this.props.action(brad);
  }
  handleDemoFoodie(e) {
    e.preventDefault();
    let foodie = {username: "Foodie Lover", password: "123456" }

    this.props.action(foodie);
  }
  handleDemoMusic(e) {
    e.preventDefault();
    let music = {username: "Music Lover", password: "123456" }

    this.props.action(music);
  }

  enter(e) {
    // debugger; 
    if (e.key === 'Enter') {
      e.preventDefault();
      this.setState({ username: '', password: '' });
      this.props.action(this.state);
    }
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
          <div className="logo">Insight</div>
          <form onKeyPress={this.enter} onSubmit={this.handleSubmit} className="login-form-box" >
            <div className="text-container">
              <div className='text-greeting'>
                <div className='text-greeting-description'>Welcome To Insight!</div>
                <div className="text-greeting-description">Please {this.props.formType} {'or '} {this.props.navLink}</div>          
                <br />
              </div>
              <div className='demo-container'>
                <button className="demo" onClick={this.handleDemoStark}>Tony Stark</button>
                <button className="demo" onClick={this.handleDemoAngelina}>Angelina Jolie</button>
                <button className="demo" onClick={this.handleDemoSarah}>Sarah Avengleu</button>
                <button className="demo" onClick={this.handleDemoBrad}>Brad Jessin</button>
                <button className="demo" onClick={this.handleDemoFoodie}>Foodie Lover</button>
                <button className="demo" onClick={this.handleDemoMusic}>Music Lover</button>
              </div>
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