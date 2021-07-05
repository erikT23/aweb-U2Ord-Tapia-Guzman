var nota = {
    cont: ""
};

var nt = document.createElement("P");
nt.setAttribute("type", "text");
nt.setAttribute("id", "nt-imp");
nt.setAttribute("class","bg-secondary");








function guardar() {
    nota.cont = document.getElementById("nota").value;
    console.log(nota);
    imprimir();
}

function imprimir() {
    var para = document.createElement("p");
    var t = document.getElementById("int").innerHTML = nota.cont;
    
    document.getElementById("int").appendChild(para);
    
}


