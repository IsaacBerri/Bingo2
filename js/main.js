const containerNumber = document.querySelector(".containerNumber");
const number = document.querySelector(".number");
console.log(number);
const table = document.querySelector(".marks");
const player = document.querySelector(".numerosPlayer");
const cpu = document.querySelector(".numerosCpu");
const parrafos = document.getElementsByClassName("numeroDelCarton");

const cartonPlayer = [];
const cartonCpu = [];

number.addEventListener("click", () => agregarNumero(generador()));

function generador() {
  const num = Math.floor(Math.random() * (91 - 1) + 1);
  return num;
}

function numerosDeCartones(Array, carton) {
  for (let i = 0; i < 15; i++) {
    let num = Math.floor(Math.random() * (91 - 1) + 1);
    while (Array.includes(num)) {
      num = Math.floor(Math.random() * (91 - 1) + 1);
    }
    Array.push(num);
  }
  Array.map((numero) => {
    const numerosDelCarton = document.createElement("p");
    numerosDelCarton.classList.add("numeroDelCarton");
    numerosDelCarton.innerHTML = `
   ${numero}`;
    carton.append(numerosDelCarton);
  });
}
function agregarNumero(numeroGenenado) {
  const ultimoNumero = document.createElement("div");
  ultimoNumero.classList.add("numberGenerate");
  ultimoNumero.innerHTML = `
  ${numeroGenenado}`;
  table.append(ultimoNumero);

  tacharNumeros(numeroGenenado);
  ganador(cartonPlayer, numeroGenenado, "Player");
  ganador(cartonCpu, numeroGenenado, "Cpu");
  table.scrollTop = table.scrollHeight;
}

function tacharNumeros(numeroExistente) {
  const arrayParrafos = Array.from(parrafos);

  arrayParrafos.forEach(function (element) {
    if (numeroExistente == element.innerHTML) {
      element.classList.remove("numeroDelCarton");
      element.classList.add("tachado");
    }
  });
}

function ganador(array, numeroGenenado, ganador) {
  const arrayGanador = array.indexOf(numeroGenenado);
  if (arrayGanador > -1) {
    array.splice(arrayGanador, 1);
  }
  if (array.length === 0) {
    containerNumber.removeChild(number)
    containerNumber.innerHTML = `
    <p>El ganador es ${ganador}</p>`
  }
  console.log(array);
}

numerosDeCartones(cartonPlayer, player);
numerosDeCartones(cartonCpu, cpu);
