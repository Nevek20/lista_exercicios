function filtrarPorVogal(array) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return array.filter(item => vogais.includes(item.charAt(0)));
}

// Exemplo de uso:
const palavras = ['maçã fuji', 'banana nanica', 'uva thompson', 'laranja', 'abacaxi', 'morango'];
const palavrasComVogal = filtrarPorVogal(palavras);

console.log(palavrasComVogal); // Saída: ['banana nanica', 'uva thompson', 'abacaxi'] oq vc quiser meu rei