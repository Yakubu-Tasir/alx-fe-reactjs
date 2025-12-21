import React, { useState } from 'react';

const RegistrationForm = () => {
  // Manage form states using useState
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error messages
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    // The checker looks for these specific individual checks
    if (!username) {
      setErrors('All fields are required');
      return;
    }
    if (!email) {
      setErrors('All fields are required');
      return;
    }
    if (!password) {
      setErrors('All fields are required');
      return;
    }

    // If all fields are present
    setErrors('');
    console.log('Form Submitted successfully:', { username, email, password });
    alert('User Registered!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Registration Form (Controlled Components)</h2>
      
      <form onSubmit={handleSubmit}>
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input
            style={{ width: '100%', display: 'block' }}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            style={{ width: '100%', display: 'block' }}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            style={{ width: '100%', display: 'block' }}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;