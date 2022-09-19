const palavras = ['melancia', 'ovo', 'abobora', 'melao', 'manga', 'abacaxi', 'leite']
const letra = 'm';

let verificador = 0;

for (let letraInicial of palavras) {
    if (letraInicial[0] !== letra) {
        verificador++
    }
}


console.log(verificador);

