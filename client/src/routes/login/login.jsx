import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.styles.scss";
const Login = ({ addUsers, handleLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginEmail = useRef();
  const loginPassword = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    addUsers(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSign = (e) => {
    e.preventDefault();
    handleLogin(loginEmail.current.value, loginPassword.current.value);
  };
  return (
    <div className="section-container container">
      <section className="section">
        <form className="form" onSubmit={handleSubmit}>
          <h5>REGISTER </h5>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <br />
            <input
              required
              type="text"
              className="form-input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <br />
            <input
              required
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <br />
            <input
              required
              type="password"
              className="form-input"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-div">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </section>
      <section className="section">
        <form className="form" onSubmit={handleSign}>
          <h5>LOGIN</h5>
          <div className="form-row">
            <label htmlFor="email2" className="form-label">
              Email:
            </label>
            <br />
            <input
              required
              type="email"
              className="form-input"
              id="email2"
              placeholder="Email"
              ref={loginEmail}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password2" className="form-label">
              Password:
            </label>
            <br />
            <input
              required
              type="password"
              className="form-input"
              id="password2"
              placeholder="Password"
              ref={loginPassword}
            />
          </div>
          <div className="button-div">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Login;
