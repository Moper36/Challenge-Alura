// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

// Detectar tecla Enter para agregar nombre 
document.getElementById("amigo").addEventListener("keypress", (event) => {
    if (event.key === "Enter") agregarAmigo();
});

// Función para actualizar lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join("");
}

// Funció para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

// Animación de suspenso al elegir amigo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Pensando...";

    setTimeout(() => {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
        resultado.style.animation = "pop 0.5s ease";
    }, 2000);
}

// Reinicar el juego sin refrescar página
function reiniciarJuego() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}
