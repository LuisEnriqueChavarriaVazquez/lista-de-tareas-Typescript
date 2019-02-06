var _this = this;
//Variables.
var lista = document.getElementById("lista"), tareaInput = document.getElementById("tareaInput"), btnNuevaTarea = document.getElementById("btn-agregar");
//Funciones.
var agregarTarea = function () {
    var tarea = tareaInput.value, nuevaTarea = document.createElement("li"), enlace = document.createElement("a"), contenido = document.createTextNode(tarea);
    if (tarea === "") {
        alert("Agrega alguna tarea");
        return false;
    }
    //Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    //pasando el atributo de HREF
    enlace.setAttribute("href", "#");
    //Agregamos el enlace a en li
    nuevaTarea.appendChild(enlace);
    //Tarea a la lista
    lista.appendChild(nuevaTarea);
    tareaInput.value = "";
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", function () {
            this.parentNode.removeChild(this);
        });
    }
};
var eliminarTarea = function () {
    _this.parentNode.removeChild(_this);
};
//Eventos de nuestra app.
btnNuevaTarea.addEventListener('click', agregarTarea);
tareaInput.addEventListener('click', eliminarTarea);
//Borrando elementos en la lista.
for (var k = 0; k <= lista.children.length - 1; k++) {
    lista.children[k].addEventListener('click', eliminarTarea);
}
