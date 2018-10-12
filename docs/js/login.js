// Registro y login
window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si estamos logueados
      document.getElementById('screenLogin').style.display = 'none';
      document.getElementById('screenMenu').style.display = 'block';
      document.getElementById('menuStick').style.display = 'block';
      console.log("User > " + JSON.stringify(user));
      let uid = user.uid;
      let email = firebase.auth().currentUser.email;
      console.log(email);
      showEmail.innerHTML = email;
    } else {
      //No estamos logueados
      document.getElementById('screenLogin').style.display = 'block';
      document.getElementById('screenMenu').style.display = 'none';
      document.getElementById('screenProfile').style.display = 'none';
      document.getElementById('screenQA').style.display = 'none';
      document.getElementById('screenTarifa').style.display = 'none';
      document.getElementById('screenSaldo').style.display = 'none';
      document.getElementById('menuStick').style.display = 'none';
    }
  });
};

function register() {
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  if (userPassword.length <= 8) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        console.log("Usuario registrado");
      })
      .catch((error) => {
        console.log("Error de firebase > " + error.code);
        console.log("Error de firebase, mensaje > " + error.message);
      });
  } else {
    alert('Excede los 8 números permitidos');
  }
}

function login() {
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => {
      console.log("Usuario logueado");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

function logout() {
  firebase.auth().signOut()
  .then(() => {
    console.log("Cerraste sesión");
  })
  .catch();
}
