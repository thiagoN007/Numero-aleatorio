function sortear() { //Funcao para sortear numero aleatorio

let btn = document.getElementById("btn-sortear");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", ()=>{
    let numero_sorteado = Math.floor(Math.random() * 25) + 1;
    resultado.innerHTML = `Numero sorteado: ${numero_sorteado}`
})

}
sortear();




