function add() { //Toma el valor que está ingresando el usuario
  var comentarios = document.getElementById('comment').value; //Crea variable, llamandola por su ID y rescata su valor (lo que escribió el usuario)
  document.getElementById('comment').value = ""; //Esto LIMPIA EL TEXT AREA!
  var nuevoComentario = document.createElement('div'); //CREA UN CONTENEDOR PARA LOS COMENTARIOS!
  var cont = document.getElementById('cont');

  /* ESTO SE VA CREANDO EN ORDEN, EL HTML SOLO SERVIRÁ DE REFERENCIA!!!
  SE VA CREANDO DE ADENTRO HACIA AFUERA*/

  var check = document.createElement('input'); // CREA EL "TIPO" DE CONTENEDOR PARA LOS COMENTARIOS
  check.type = 'checkbox'; // CHECKBOX ES LA CAJITA QUE LE PONES UN TICKET

  var paragraph = document.createElement('p'); // CREA PARRAFO
  paragraph.classList.add('color');
  var nodeText = document.createTextNode(comentarios); // ESTO DEBE CREAR (DEFINIR) UN NODO DE TEXTO
  paragraph.appendChild(nodeText);

  var heart = document.createElement('i'); // CREA LOS ICONOS PARA EL CONTENEDOR DE LOS COMENTARIOS (esto es el tipo)
  heart.classList.add('fa', 'fa-heart', 'heart'); // ESTO ES LA "CLASS" DE LOS ICONOS

  var trash = document.createElement('i'); //  CREA LOS ICONOS PARA EL CONTENEDOR DE LOS COMENTARIOS (esto es el tipo)
  trash.classList.add('fa', 'fa-trash', 'trash'); // ESTO ES LA "CLASS" DE LOS ICONOS

  nuevoComentario.appendChild(check); // AHORA ESTO AGREGANDO EN ORDEN LO QUE SE HA CREADO AL DIV VACIO
  nuevoComentario.appendChild(heart);
  nuevoComentario.appendChild(trash);
  nuevoComentario.appendChild(paragraph);
  cont.appendChild(nuevoComentario);

  check.addEventListener('click', function(){
    paragraph.classList.toggle('strike-out');
  });

  trash.addEventListener('click', function(){
    cont.removeChild(nuevoComentario);
  });
  heart.addEventListener('click', function(){
    heart.classList.toggle('red');
  });
}
