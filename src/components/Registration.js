import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { Link,useNavigate  } from 'react-router-dom';


const Registration = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form
        onSubmit={handleRegistration}
        style={{ width: '300px', padding: '20px',  border: "2px solid green", borderRadius: '8px', color: 'black' }}
      >
        <h1>Registration</h1>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{ marginBottom: '5px', display: 'block' }}>
            Username
          </label>
          <input
            type="name"
            value={username}
            placeholder="Your name"
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ marginBottom: '5px', display: 'block' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            margin: 'auto',
            display: 'block',
          }}
        >
          Register
        </button>
        <div>
          <p>
          Already a user? Login <Link to="/">Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
