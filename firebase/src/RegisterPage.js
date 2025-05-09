// src/Register.js
import React, { useState } from 'react';
import { db, ref, set } from './firebase';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userId = formData.email.replace(/[^a-zA-Z0-9]/g, ""); // simple user id
    await set(ref(db, 'users/' + userId), formData);
    alert("User Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required type="email" />
      <input name="password" onChange={handleChange} placeholder="Password" required type="password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;

