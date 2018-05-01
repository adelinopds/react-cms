const fakeAuthorization = (email, password) => {
  if (email === 'demo@demo.com' && password === 'demo') {
    localStorage.setItem('user-token', 'js-token-demo');
    return true;
  }
  return false;
};

export default fakeAuthorization;
