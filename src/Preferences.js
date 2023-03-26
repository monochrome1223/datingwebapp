import React, { useState } from 'react';

function Preferences(props) {
  const [gender, setGender] = useState('both');
  const [ageRange, setAgeRange] = useState([18, 65]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeRange([parseInt(e.target.value[0]), parseInt(e.target.value[1])]);
  };

  const handleApplyFilters = () => {
    props.onApplyFilters(gender, ageRange);
    props.history.push('/');
  };

  return (
    <div className="preferences">
      <h1>Preferences</h1>
      <div className="filters">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="both">Both</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="age-range">Age Range:</label>
        <input type="range" id="age-range" min="18" max="65" value={`${ageRange[0]},${ageRange[1]}`} onChange={handleAgeChange} />
        <span>{ageRange[0]}</span>
        <span>{ageRange[1]}</span>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default Preferences;
