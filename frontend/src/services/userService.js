const HOST = 'http://localhost:3000';
const LOGIN_URL = '/sessions';

const logout = () => {
  //remove user from local storage to log user out..................
  localStorage.removeItem('user');
};

const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

const login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };

  return fetch(HOST + LOGIN_URL, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response

      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
};

export const userService = {
  login,
  logout,
};

// const _longin = async (username, password) => {
//   try {
//     const response = await fetch(HOST + LOGIN_URL, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         username,
//         password
//       })
//     });
//
//     if (response.ok) {
//       const user = await response.json();
//
//       if (user.token) {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('user', JSON.stringify(user));
//       }
//     } else {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         logout();
//         window.location.reload(true);
//       }
//     }
//
//     throw new Error('Login Failed!');
//
//   } catch (error) {
//     console.error(error);
//   }
// };
