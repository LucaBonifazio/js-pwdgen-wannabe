// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22


const name = prompt('Come ti chiami?');
const surname = prompt('Il tuo cognome?');
const color = prompt('Il tuo colore preferito?');
const password = (`${name}${surname}${color}22`)

document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('color').innerHTML = color;
document.getElementById('password').innerHTML = password;