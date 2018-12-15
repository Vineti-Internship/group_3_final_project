import React from 'react';

const logoutHandler = () => {
  document.location.href = '/login'
};

const Header = () => {
  return (
    <div className='header'>
      <h2>
        State Engineering University of Armenia
      </h2>
      <button onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Header;
