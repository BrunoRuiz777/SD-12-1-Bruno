// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

// Recibimos el id como parámetro
export function delUser(id) {
    // Concatenamos el id al final de la ruta (ej. http://localhost:3000/users/5)
    const url = getServerURL() + "/users/" + id;

    // Hacemos el fetch indicando el método DELETE
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        // En DELETE, a veces el servidor no devuelve un JSON, solo un status "ok"
        if (response.ok) {
            console.log(`Usuario con ID ${id} eliminado exitosamente`);
        } else {
            console.log(`No se encontró el usuario con ID ${id}`);
        }
    })
    .catch(error => console.error("Error al eliminar usuario:", error));
}