import React from 'react';


const detectUserType = (id) => {
  switch (id) {
    case 1: {return 'Admin';}
    case 2: {return 'Teacher';}
    case 3: {return 'Student';}
    default: {return 'Wrong typeId'}
  }
};

const UserInfo = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <h2>User Info</h2>
      <ul>
        <li>
          <ul className='user-info-horizontal'>
            <li>first name :</li>
            <li>{user.first_name || 'Admin'}</li>
          </ul>
        </li>
        <li>
          <ul className='user-info-horizontal'>
            <li>last name :</li>
            <li>{user.last_name || 'Admin'}</li>
          </ul>
        </li>
        <li>
          <ul className='user-info-horizontal'>
            <li>email :</li>
            <li>{user.email}</li>
          </ul>
        </li>
        <li>
          <ul className='user-info-horizontal'>
            <li>user type :</li>
            <li>{detectUserType(user.type_id)}</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default UserInfo;