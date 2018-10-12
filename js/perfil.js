//Agregar tarjetas y guardar en firebase database
firebase.database().ref('tarjetas')
  .limitToLast(20) //sólo las últimas tarjetas
  .once('value')
  .then((bipData) => {
    console.log("Tarjetas >" + JSON.stringify(numTarjeta));
  })
  .catch(() => {
  });

// Guardar  las tarjetas en firebase
function upCard() {
  let tarjetaBip = numeroBip.value;
    console.log(tarjetaBip);
    const emailUser = email.value;
    console.log(emailUser);

    //colección tarjetas
    const newNumberKey = firebase.database().ref().child('tarjetas').push().key;
    firebase.database().ref(`tarjetas/${newNumberKey}`).set({
      num: tarjetaBip,
      userName: emailUser
    });

    bipNumber.value = '';
    alert('Se guardó la tarjeta.');
  }

  //Imprimir las tarjetas guardadas
  firebase.database().ref('tarjetas')
    .limitToLast(20)
    .on('child_added', (newCard) => {
      cardNumbers.innerHTML += `
      <p id = newCardNumber>${newCard.val().num}</p>
            `;

      seleccionarBip.innerHTML += `
    <select>
    <option>${newCard.val().num}</option>
    </select>
    `

      seleccionarBips.innerHTML += `
    <select>
    <option>${newCard.val().num}</option>
    </select>
    `
    });