// src/Login.js
import React, { useState } from 'react';
import { db, ref } from './firebase';
import { get, child } from 'firebase/database';

const Login = () => {
  const [formData, setFormData] = useState({email: '', password: ''});

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userId = formData.email.replace(/[^a-zA-Z0-9]/g, "");
    const snapshot = await get(child(ref(db), 'users/' + userId));
    if (snapshot.exists()) {
      const user = snapshot.val();
      if (user.password === formData.password) {
        alert(`Welcome ${user.name}`);
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" onChange={handleChange} placeholder="Email" required type="email" />
      <input name="password" onChange={handleChange} placeholder="Password" required type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
