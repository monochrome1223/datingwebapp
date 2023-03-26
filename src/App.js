import React, { useState } from 'react';
import { users } from './dummyData';
import './App.css';
import Navbar from './Navbar';

import male1 from './images/male1.PNG';
import male2 from './images/male2.PNG';
import female1 from './images/female1.PNG';
import female2 from './images/female2.PNG';

function getProfileImage(imageName) {
  const images = {
    'male1.PNG': male1,
    'male2.PNG': male2,
    'female1.PNG': female1,
    'female2.PNG': female2,
  };

  return images[imageName];
}

function generateGreetingMessage() {
  const greetings = [
    'Hi there! Nice to meet you!',
    'Hey! How are you doing?',
    'Hello! What a pleasant surprise!',
  ];
  const renderContent = () => {
    switch (activeTab) {
      case 'discover':
        return renderDiscover();
      case 'matches':
        return renderMatches();
      case 'messages':
        // Replace this comment with the logic to render messages
        return <div>Messages coming soon</div>;
      case 'profile':
        // Replace this comment with the logic to render the user profile
        return <div>User profile coming soon</div>;
      default:
        return <div>Unknown tab</div>;
    }
  };
  const renderDiscover = () => {
    return (
      <>
        {user ? (
          <div className="user-card">
            {/* ...existing user card code... */}
          </div>
        ) : (
          <div className="no-users">No more users</div>
        )}
      </>
    );
  };
  
  const renderMatches = () => {
    return (
      <div className="matches">
        <h2>Matches</h2>
        {matches.map((match) => (
          <div key={match.id} className="match">
            {/* ...existing match card code... */}
          </div>
        ))}
      </div>
    );
  };
  
  

  return greetings[Math.floor(Math.random() * greetings.length)];
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [activeTab, setActiveTab] = useState('discover');


  const [userPreferences, setUserPreferences] = useState({
    minAge: 18,
    maxAge: 100,
    maxDistance: 50,
  });

  const [showPreferences, setShowPreferences] = useState(false);

  const togglePreferences = () => {
    setShowPreferences((prevState) => !prevState);
  };

  const handleApprove = () => {
    const currentUser = users[currentIndex];
    currentUser.liked = true;

    const matchedUser = users.find(
      (user) =>
        user.id !== currentUser.id &&
        user.liked &&
        user.age >= userPreferences.minAge &&
        user.age <= userPreferences.maxAge &&
        user.distance <= userPreferences.maxDistance &&
        !matches.some((match) => match.id === user.id)
    );

    if (matchedUser) {
      setMatches((prevMatches) => [
        ...prevMatches,
        { ...matchedUser, message: generateGreetingMessage() },
      ]);
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const user = users[currentIndex];

  return (
    <div className="App">
      <Navbar />
      <button onClick={togglePreferences} className="preferences-btn">
        Preferences
      </button>
      {showPreferences && (
        <div className="preferences">
          <form className="preferences-form">
            <label htmlFor="minAge">Minimum age:</label>
            <input
              type="number"
              id="minAge"
              name="minAge"
              value={userPreferences.minAge}
              onChange={(e) => setUserPreferences({ ...userPreferences, minAge: parseInt(e.target.value, 10) })}
            />

            <label htmlFor="maxAge">Maximum age:</label>
            <input
              type="number"
              id="maxAge"
              name="maxAge"
              value={userPreferences.maxAge}
              onChange={(e) => setUserPreferences({ ...userPreferences, maxAge: parseInt(e.target.value, 10) })}
            />

            <label htmlFor="maxDistance">
            Maximum distance (km):</label>
          <input
            type="number"
            id="maxDistance"
            name="maxDistance"
            value={userPreferences.maxDistance}
            onChange={(e) => setUserPreferences({ ...userPreferences, maxDistance: parseInt(e.target.value, 10) })}
          />
        </form>
      </div>
    )}

    {user ? (
      <div className="user-card">
        <img
          className="user-photo"
          src={getProfileImage(user.photo)}
          alt={user.name}
        />
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-age">{user.age} years old</p>
          <p className="user-distance">{user.distance} km away</p>
        </div>
        <div className="buttons">
          <button onClick={handleApprove} className="approve">
            <span role="img" aria-label="approve">
              ✅
            </span>
          </button>
          <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)} className="pass">
            <span role="img" aria-label="pass">
              ❌
            </span>
          </button>
        </div>
      </div>
    ) : (
      <div className="no-users">No more users</div>
    )}

    <div className="matches">
      <h2>Matches</h2>
      {matches.map((match) => (
        <div key={match.id
        } className="match">
        <img
          className="match-photo"
          src={getProfileImage(match.photo)}
          alt={match.name}
        />
        <div className="match-info">
          <h3 className="match-name">{match.name}</h3>
          <p className="match-age">{match.age} years old</p>
          <p className="match-distance">{match.distance} km away</p>
          <p className="match-message">{match.message}</p>
        </div>
      </div>
    ))}
  </div>
</div>
);

}

export default App;

