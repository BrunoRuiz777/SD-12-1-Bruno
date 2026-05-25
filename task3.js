import { getServerURL } from "./task1.js";

export function addUser(firstName, lastName, email) {
    const url = getServerURL() + "/users";

    fetch(url)
        .then(response => response.json())
        .then(users => {
            const maxId = users.length > 0 ? Math.max(...users.map(u => Number(u.id))) : 0;
            const nextId = String(maxId + 1); // Si el mayor es 4, esto será "5"

            const newUser = {
                id: nextId,
                firstName: firstName,
                lastName: lastName,
                email: email
            };

            return fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
        })
        .then(response => response.json())
        .then(data => console.log("Usuario agregado exitosamente:", data))
        .catch(error => console.error("Error al agregar usuario:", error));
}