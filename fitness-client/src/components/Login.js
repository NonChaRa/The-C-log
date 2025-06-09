import './Login.css';
const Login = ( { openRegister }) => {
  return (
    <div className="container">
        <div className="login-form">
            <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <span className="icon"></span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="remember-forgot">
                <label>
                <input type="checkbox" /> Remember me
                </label>
                <a href="/">Forgot password</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
                <p>
                Don't have an account? <button
                type="button"
                className="link-btn"
                onClick={openRegister}
                style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', padding: 0 }}
              >
                Register
              </button>
                </p>
            </div>
            </form>
        </div>
    </div>
  )
};

export default Login;
