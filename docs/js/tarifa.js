//Agregar tarifas a las opciones
valorTarifa.addEventListener('click', () => {
  let tarifa = document.getElementById('valorTarifa');
  let precioVal = tarifa[tarifa.selectedIndex].value;
  let lastPrice = precio.innerHTML = `<P class="finalResult">Tarifa</p>` + '$' + precioVal;
});

//Traer datos de las tarjetas
calcular.addEventListener('click', () => {
  let bipNun = cardNumber.value;
  let option = selecccionarBip.value;
  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipNun || option}`)
    .then(response => response.json())
    .then(bipData => {
      dataBipCard = bipData;
      console.log(dataBipCard);

      //Cálculo de saldo y tarifa
      const regex = /(\d+)/g;
      const bipBalance = dataBipCard.saldoTarjeta.match(regex)
      const finalBipBalance = parseInt(bipBalance[0] + bipBalance[1]);
      const tarifa = document.getElementById('valorTarifa').value;
      const finalTotal = finalBipBalance - tarifa;
      console.log(finalTotal);
      //Imprimir el resultado
      resultado.innerHTML = `<P class="calculado">Saldo final</p>` + '$' + finalTotal;
    })
    .catch(error => {
      console.error("No fue posible completar la solicitud.");
    });
});