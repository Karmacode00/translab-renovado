//Fetch de la tarjeta bip para ver el saldo
saldoDisponible.addEventListener('click', () => {
  let numeroBip = tarjetaBip.value;
  let resultadoBip = bipContainer.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numeroBip || resultadoBip}`)
    .then(response => response.json())
    .then(data => {
      infoBip = data;
      balanceInfoBip = data.saldoTarjeta;
      resultadoBipContainer.innerHTML = `
     <p id="saldoTarjeta">Saldo total :</p>  <p class="saldoTotal"> ${data['saldoTarjeta']}</p>
    `;
    })
    .catch(error => {
      console.error("No fue posible acceder a la información.");
    });
});

//Agregar tarjeta en pantalla perfil

function onlyDigit(){
  // get value from input field
  const numeroTarjeta = document.getElementById('numeroBip').value;
  
  // regular expression for a non-digit character
  let nonDigit = /\D/;
  
  // check for null or empty
  if(numeroTarjeta == null || numeroTarjeta == ''){
     alert('Debes ingresar el número de tu tarjeta');
  }
  
  // check for a non-digit character
  else if(numeroTarjeta.match(nonDigit)){
   alert('Sólo se permite ingresar números.');
  } else {
    let contenedor = document.createElement("p");
    let t = document.createTextNode(`${numeroTarjeta}`);
    contenedor.appendChild(t);
    document.getElementById("cardNumbers").appendChild(contenedor);
  }
 }
  


/* function agregarTarjeta() {
  const tarjetaBip = document.getElementById('numeroBip').value;
  if (tarjetaBip.length == 0) {
    alert('Debe ingresar una tarjeta');
  } else {
    cardNumbers.innerHTML = `
  <p id="tarjetas"> ${tarjetaBip} </p>`
  }
}


*/
