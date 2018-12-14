const HOST = 'http://localhost:3000';
const LOGIN_URL = '/sessions';
const LOGOUT_URL = '/sessions/del';

const handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};

const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch(HOST + LOGIN_URL, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response

      if (user.authentication_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        document.location.href = '/'; //redirect to home page.......................
      }

      return user;
    });
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    try {
      const response = await fetch(HOST + LOGOUT_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: user.email
        })
      });

      if (response.ok) {
        localStorage.removeItem('user');
      } else {
        throw new Error('Logout Failed!');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    localStorage.removeItem('user');
  }
};

export const userService = {
  login,
  logout,
};
