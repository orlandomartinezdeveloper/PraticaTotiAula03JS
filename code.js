let nome = prompt("Qual é seu nome?");
let sobrenome = prompt("Digite seu sobrenome:");
let edade = prompt("Qual é sua idade");
let cor = prompt("Digite sua cor favorita:");
Number(edade);
let ano = 2021 - edade;
console.table ({
    Nome: nome,
    Sobrenome: sobrenome,
    Edade: edade,
    CorFavorita: cor,
    Edade: edade,
    Nacimento: ano
});