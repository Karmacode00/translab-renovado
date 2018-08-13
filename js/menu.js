
//Ver perfil y ocultar lo demás
  function verPerfil() {
      document.getElementById('screenLogin').style.display = 'none';
      document.getElementById('screenMenu').style.display = 'none';
      document.getElementById('screenQA').style.display = 'none';
      document.getElementById('screenTarifa').style.display = 'none';
      document.getElementById('screenSaldo').style.display = 'none';
      document.getElementById('screenProfile').style.display = 'block';
      document.getElementById('menuStick').style.display = 'block';
    };

//Ver menú
function verMenu() {
    document.getElementById('screenLogin').style.display = 'none';
    document.getElementById('screenMenu').style.display = 'block';
    document.getElementById('screenQA').style.display = 'none';
    document.getElementById('screenTarifa').style.display = 'none';
    document.getElementById('screenSaldo').style.display = 'none';
    document.getElementById('screenProfile').style.display = 'none';
    document.getElementById('menuStick').style.display = 'block';
  };
  //Ver preguntas frecuentes
  function verPreguntas() {
      document.getElementById('screenLogin').style.display = 'none';
      document.getElementById('screenMenu').style.display = 'none';
      document.getElementById('screenQA').style.display = 'block';
      document.getElementById('screenTarifa').style.display = 'none';
      document.getElementById('screenSaldo').style.display = 'none';
      document.getElementById('screenProfile').style.display = 'none';
      document.getElementById('menuStick').style.display = 'block';
    };
  //Ver saldo
  function verSaldo() {
      document.getElementById('screenLogin').style.display = 'none';
      document.getElementById('screenMenu').style.display = 'none';
      document.getElementById('screenQA').style.display = 'none';
      document.getElementById('screenTarifa').style.display = 'none';
      document.getElementById('screenSaldo').style.display = 'block';
      document.getElementById('screenProfile').style.display = 'none';
      document.getElementById('menuStick').style.display = 'block';
    };
//Ver tarifa
    function verTarifa() {
        document.getElementById('screenLogin').style.display = 'none';
        document.getElementById('screenMenu').style.display = 'none';
        document.getElementById('screenQA').style.display = 'none';
        document.getElementById('screenTarifa').style.display = 'block';
        document.getElementById('screenSaldo').style.display = 'none';
        document.getElementById('screenProfile').style.display = 'none';
        document.getElementById('menuStick').style.display = 'block';
      };