const cargador = ['Pium!', 'Pium!', 'Pium!', 'Pium!', 'Pium!', 'Pium!', 'Pium!']

const numeroEntre0y5 = Math.random()*5

function chauchat (array) {

  if (numeroEntre0y5 >= 1) {

  for(let i = 0; i < array.length; i++) {
  console.log(array[i])
  } 
  
} else {
    console.log('No va')
  } 
}
chauchat(cargador)