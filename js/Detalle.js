

let contar=0;
function restar() {
    if(contar>0){
        contar=contar-1;
        document.getElementById("contador").innerHTML=contar;
    }
}
function sumar() {
    if(contar<productos.stock){
        contar=contar+1;
        document.getElementById("contador").innerHTML=contar;
    }else{
        alert("No hay stock suficiente")
    }
}