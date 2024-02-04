let numUsuario = parseInt(prompt("Coloque um número de 1 a 10."))
let verificador = true


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let aleatorio = parseInt(getRandomArbitrary(1,10))

while(verificador){
  if(numUsuario > aleatorio){
    alert(`Seu número foi alto, tente novamente. (${aleatorio})`)
    numUsuario = parseInt(prompt("Coloque um número de 1 a 10."))
  }else if(numUsuario == aleatorio){
    alert(`Você acertou! seu número foi ${numUsuario} e o valor aleatório foi ${aleatorio}`)
    verificador = false
  }else if(numUsuario < aleatorio){
    alert(`Seu número foi baixo, tente novamente. ${aleatorio}`)
    numUsuario = parseInt(prompt("Coloque um número de 1 a 10."))
  }else{
    alert("Valor inválido.")
    numUsuario = parseInt(prompt("Coloque um número de 1 a 10."))
  }
}