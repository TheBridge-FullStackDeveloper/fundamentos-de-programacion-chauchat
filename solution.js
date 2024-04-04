/***** Solución 1 *****/ 
function chauchat(cargador) {
    let disparo = Math.random() * 100; // Genero un número aleatorio entre 0 y 100
    let disparosSeguidos = 0;
    if (disparo > 80) { // Hay un 80% de probabilidad de que se quede atascada
        console.log("Illo, me he quedao pillá!");
    } else { // Si no se atasca entra en modo disparo
        for (let i = 0; i < 7; i++) {
            if (disparosSeguidos == 3) {
                disparosSeguidos = 0;
                console.log("\n");
                i--; //Para evitar que se pase una posición del array y se desperdicie una bala
            } else {
                console.log(cargador[i]);
                disparosSeguidos++;
            }
        }
    }
}
let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
chauchat(cargador);

/***** Solución 2 *****/ 
let cargador2 = 7; //7 piums

function chauchat2(cargador) {
  for (let i = 0; i < cargador; i++) {
    console.log("pium!"); //bucle for para repetir pium cargador veces
  }
}

chauchat2(cargador2); //call

/***** Solución premium *****/ 
function chauchat3(cargador) {
  let disparos = 0; //contador disparos

  for (let i = 0; i < cargador; i++) {
    //con la probabilidad de bloqueo
    let probabilidad = Math.random();
    if (probabilidad < 0.8) {
      console.log("pium!");
      //espacio cada 3 disparos
      if (disparos % 3 === 0) {
        console.log(" "); // Espacio
      }
    } else {
      console.log("Illo, me he quedao pillá!");
      break;
    }
  }
}