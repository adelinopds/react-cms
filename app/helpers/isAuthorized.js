const isAuthorized = () => {
  const userToken = localStorage.getItem('user-token');
  if (userToken) {
    return userToken;
  }
  return false;
};

export default isAuthorized;
