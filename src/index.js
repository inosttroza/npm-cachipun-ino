//desarrollo que retorna piedra, papel o tijera desde el lado del server
const eleccionServer = () =>{
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "piedra";
        case 1:
            return "papel";
        case 2:
            return "tijera";
    }
}

module.exports = {
    eleccionServer
}