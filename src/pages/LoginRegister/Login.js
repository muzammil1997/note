import "./style.scss";
import React from "react";
import loginImg from "../../assets/login.svg";
import history from '../../history';

class Login extends React.Component {

  state = { username: '', password: '', isLoading: false};

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState = () => {
      history.push('/register');
  }

  onLogin = () => {
   
  }

  render() {

    return (
        <div className="App">
        <div className="login">
          <div className="container">
          <div className="base-container">
                <div className="header">Login</div>
                    <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={this.state.username} onChange={e=>this.setState({username: e.target.value})} placeholder="username" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} onChange={e=>this.setState({password: e.target.value})} placeholder="password" />
                        </div>
                    </div>
                    </div>
                    <div className="footer">
                    <button onClick={this.onLogin} type="button" className="btn">
                        Login
                    </button>
                    </div>
                </div>
          </div>
          <RightSide
            current="Register"
            currentActive="login"
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Login;
