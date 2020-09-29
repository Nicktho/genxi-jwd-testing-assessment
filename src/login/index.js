const loginEmail = new DomElement();
const loginPassword = new DomElement();
const loginButton = new DomElement();
const loginMessage = new DomElement();

const login = (email, password) => Api.login(email, password)
  .then(response => {
    if (response.error) {
      if (response.error === 'user not found') {
        throw new Error('Oops! Incorrect username or password. Check your details and try again.');
      } else if (response.error === 'Missing password') {
        throw new Error('Oops! Missing password, make sure to fill in your password and try again.');
      }
    }

    return response.token;
  });

const clickButton = () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  return login(email, password)
    .then(token => {
      loginEmail.value = '';
      loginPassword.value = '';

      loginMessage.innerText = `Logged in with token ${token}`;
    })
    .catch(err => {
      loginMessage.innerText = err.message;
    });
}
