import React from 'react';
import './Navbar.css';

function Navbar({ activeTab, onTabClick }) {
  return (
    <nav className="navbar">
      <button
        className={`nav-item ${activeTab === 'discover' ? 'active' : ''}`}
        onClick={() => onTabClick('discover')}
      >
        Discover
      </button>
      <button
        className={`nav-item ${activeTab === 'matches' ? 'active' : ''}`}
        onClick={() => onTabClick('matches')}
      >
        Matches
      </button>
      <button
        className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
        onClick={() => onTabClick('messages')}
      >
        Messages
      </button>
      <button
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabClick('profile')}
      >
        Profile
      </button>
    </nav>
  );
  
  }
  
  export default Navbar;
  
