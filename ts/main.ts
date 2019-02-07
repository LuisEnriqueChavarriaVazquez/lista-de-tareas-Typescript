//Variables.
let lista = (<HTMLInputElement>document.getElementById("lista")),
    tareaInput = (<HTMLInputElement>document.getElementById("tareaInput")),
    btnNuevaTarea = (<HTMLInputElement>document.getElementById("btn-agregar"));

    //Funciones.

let agregarTarea = () =>{
    let tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if(tarea === ""){
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

        for(let i = 0; i <= lista.children.length - 1; i++){
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    }

    let eliminarTarea = () =>  {
        this.parentNode.removeChild(this);
    }


    //Eventos de nuestra app.

    btnNuevaTarea.addEventListener('click', agregarTarea);
    tareaInput.addEventListener('click', eliminarTarea);

    //Borrando elementos en la lista.

    for(let k = 0; k <= lista.children.length - 1; k++){
        lista.children[k].addEventListener('click', eliminarTarea);
    }

    
