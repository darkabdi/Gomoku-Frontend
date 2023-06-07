import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/gomoku");
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     
      <form style={{ width: '300px', padding: '20px',     border: "2px solid green", borderRadius: '8px' ,color:'black'}}>
      <h1>Login</h1>
      <div style={{ marginBottom: '20px' }}>
      <label htmlFor="email" style={{ marginBottom: '5px',display:'block'}}>Email</label>
      <input
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
       </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ marginBottom: '5px',display:'block' }}>Password</label>
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            margin: 'auto',
            display:'block'
          }}
        >
          Login
        </button>
        <div >
          <p>
            Not a user? Register <a href="Registration">Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
