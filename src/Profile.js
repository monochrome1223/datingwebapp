import React, { useState } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

function Profile() {
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with minAge and maxAge
    console.log(`Min age: ${minAge}, Max age: ${maxAge}`);
  };

  return (
    <div className="profile">
      <Navbar />
      <h1>Preferences</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Minimum age:
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          />
        </label>
        <label>
          Maximum age:
          <input
            type="number"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
