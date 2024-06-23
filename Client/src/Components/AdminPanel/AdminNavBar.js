import React, { useState, useEffect } from 'react';

function AdminNavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Admin Panel</div>
      <div className="navbar-time">{currentTime.toLocaleString()}</div>
      <h3 className='logout-btn' onClick={() => (window.location.reload())}>Logout</h3>
    </nav>
  );
}

export default AdminNavBar;
