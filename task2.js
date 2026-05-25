// Task 2: listUsers()

// Importamos la función de tu archivo anterior
import { getServerURL } from "./task1.js";

export function listUsers() {
    // Armamos la ruta completa (ej. http://localhost:3000/users)
    const url = getServerURL() + "/users";
    
    // Hacemos la petición (fetch hace un método GET por defecto)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Imprimimos la respuesta completa en la consola
            console.log(data);
        })
        .catch(error => console.error("Error de conexión:", error));
}