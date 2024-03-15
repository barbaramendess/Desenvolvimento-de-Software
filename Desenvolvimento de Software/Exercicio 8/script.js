let botao = document.querySelector("#botao");
// botao.style.background="blue";

let estaquebrado = false;
let contacliques=0;

botao.addEventListener("mouseover", e => {
    if (estaquebrado == false)
        botao.style.background = "green";
});

botao.addEventListener("mouseout", e => {
    if (estaquebrado == false)
        botao.style.background = "blue";
});

botao.addEventListener("click", e => {
    contacliques++;

    if(contacliques>=10){
    botao.style.background = "red";
    botao.innerHTML = "Quebrei!";
    estaquebrado = true;
    }
});