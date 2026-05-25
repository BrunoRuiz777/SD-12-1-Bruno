// Task 2: listUsers()

// Importamos la función de tu archivo anterior
import { getServerURL } from "./task1.js";

export function listUsers() {
    const url = getServerURL() + "/users";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error("Error de conexión:", error));
}