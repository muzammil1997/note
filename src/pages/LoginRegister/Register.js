import "./style.scss";
import React from "react";
import loginImg from "../../assets/login.svg";
import history from '../../history';

class Register extends React.Component {

  componentDidMount() {
    this.rightSide.classList.add("left");
  }

  changeState() {
    history.push('/login');
  }

  render() {

    return (
        <div className="App">
        <div className="login">
          <div className="container">
          <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
                </div>
                <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
                </div>
            </div>
          </div>
          <RightSide
            current="Login"
            currentActive="register"
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

export default Register;
