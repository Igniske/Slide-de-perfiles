var perfiles =[{
    imagen: "https://filmschoolrejects.com/wp-content/uploads/2019/04/Thanos-Smile-2.jpg",
    nombre: "nacho",
    titulo: "persona",
    texto: "aaaaaaaa",
},
{
    imagen: "https://filmschoolrejects.com/wp-content/uploads/2019/04/Infinity-Gauntlet-2.jpg",
    nombre: "ignacio",
    titulo: "boludo",
    texto: "bbbbb",
},
{
    imagen: "https://i.pinimg.com/736x/f6/36/c5/f636c584c3ef183b0a6f4b4754d4fcce.jpg",
    nombre: "manuel",
    titulo: "programador",
    texto: "lorem ipsum jashdjk jsah jahsd jhsd lorem ipsum jashdjk jsah jahsd jhsd",
}]

const avanzar = document.querySelector("#avanzar")
const atras = document.querySelector("#atras")
const submit = document.querySelector("#submit")
const imagen = document.getElementById("imagen")
const nombre = document.getElementById("nombre")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")
var addImagen = document.getElementById("addImagen")
var addNombre = document.getElementById("addNombre")
var addTitulo = document.getElementById("addTitulo")
var addDesc = document.getElementById("addDesc")
let count = 0;
var regex = /^http[^ \!@\$\^&\(\)\+\=]+(\.png|\.jpeg|\.gif|\.jpg)$/;




function agregarDatos (){
    let nuevoPerfil = {
        imagen: addImagen.value,
        nombre: addNombre.value,
        titulo: addTitulo.value, 
        texto: addDesc.value
    }
    if(regex.test(addImagen.value) && addNombre.value !== "" && addTitulo.value !== "" && addDesc.value !== "" && addDesc.value.length <= 200 ){
    perfiles.push(nuevoPerfil)
    } else{
        alert("Por favor, ingrese los datos correspondientes.")
    }
}


submit.addEventListener("click", () =>
agregarDatos(),
console.log(perfiles)
)

renderPerfil();

function renderPerfil(){
    imagen.src = perfiles[count].imagen;
    nombre.innerHTML = perfiles[count].nombre;
    titulo.innerHTML = perfiles[count].titulo;
    texto.innerHTML = perfiles[count].texto;
}

avanzar.addEventListener("click", () =>
avanzarPerfil()
);

function avanzarPerfil(){
    count++
    if(count >= perfiles.length){
        count = 0;
    }
    renderPerfil()
}

atras.addEventListener("click", () =>
retrocederPerfil()
);

function retrocederPerfil(){
    count--
    if(count < 0){
        count = perfiles.length - 1;
    }
    renderPerfil()
}

