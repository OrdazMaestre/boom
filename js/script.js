// Capturar todos los espacios necesarios como botones, resultado, cuenta atrás... OK
// Número aleatorio Math.random, Math.floor... OK
// Cuenta atrás setInterval() OK
// Ejecutar algo a los 5 segundos -> número aleatorio setTimeout()
// Reiniciar el juego con el botón
// Funcina TODO

const userInput = document.getElementById("userInput"),
      countdown = document.getElementById("countdown"),
      result= document.getElementById("result"),
      restart = document.getElementById("restart")

let time = 5
let userNumber = 0

userInput.addEventListener("change", () => {
  userNumber = userInput.value
  console.log(userNumber)
})

const randomNumber =  () => Math.floor(Math.random() * 3) + 1


// Iniciar
function startGame() {
  count()
  const mysteryNumber = new Promise(resolve => {
    setTimeout(() => {
      resolve(randomNumber())
    }, 6000)
  })
  return mysteryNumber
}

startGame().then(number => {
  let mensaje = ""
  if(number == userNumber) {
    mensaje = `<h2 class="red">WIN</h2><p>tu número: ${userNumber} el aleatorio: ${number}</p>`
  } else {
    mensaje = `<h2 class="green">LOSE</h2><p>tu número: ${userNumber} el aleatorio: ${number}</p>`
    document.body.classList.add("shake-screen");// explota la bomba
  }
  result.innerHTML = mensaje 
})


//intervalo
function count () {
  const intervalo = setInterval(() => {  
    (time === 0) && clearInterval(intervalo)
    // if((time === 0)) {
    //   clearInterval(intervalo)
    // }
    countdown.innerHTML = `<p class="blue">Cuenta atrás: ${time} segundos<p>`
    time--
  }, 1000) // Cada segundo se ejecuta
}

restart.addEventListener("click", () => {
  location.reload()
})

