// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export function delUser(id) {
    const url = getServerURL() + "/users/" + id;

    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log(`Usuario con ID ${id} eliminado exitosamente`);
        } else {
            console.log(`No se encontró el usuario con ID ${id}`);
        }
    })
    .catch(error => console.error("Error al eliminar usuario:", error));
}