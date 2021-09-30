//desarrollo que retorna piedra, papel o tijera desde el lado del server
const eleccionServer = () => {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return "PIEDRA";
        case 1:
            return "PAPEL";
        case 2:
            return "TIJERA";
    }
}

module.exports = {
    eleccionServer
}