const lista = document.querySelectorAll("#minhaLista li");
const listaArray = Array.from(lista);

function ordenaLista(){
    const listaOrdenada = listaArray.sort((a,b)=>{
        return a.textContent.localeCompare(b.textContent)
    });
    return listaOrdenada;
}

const ul = document.querySelector("#minhaLista");
ul.innerHTML="";

