let nome1 = prompt("Digite o nome da Primeira Pessoa:");
let sobrenome1 = prompt("Digite o sobrenome:");
let edade1 = prompt("Idade:");
let cor1 = prompt("Cor favorita:");
let nome2 = prompt("Digite o nome da Outra Pessoa:");
let sobrenome2 = prompt("Digite o sobrenome:");
let edade2 = prompt("Idade:");
let cor2 = prompt("Cor favorita:");
Number(edade1, edade2);
let ano1 = 2021 - edade1;
let ano2 = 2021 - edade2;
if (edade1>edade2) {
    console.log(`${nome1} é mais velho que ${nome2} por ${edade1-edade2} anos`);
} else {
    console.log(`${nome2} é mais velho que ${nome1} por ${edade2-edade1} anos`);
}
console.table ({
    Nome: nome1,
    Sobrenome: sobrenome1,
    Edade: edade1,
    CorFavorita: cor1,
    Edade: edade1,
    Nacimento: ano1,
    Nome2: nome2,
    Sobrenome2: sobrenome2,
    Edade2: edade2,
    CorFavorita2: cor2,
    Edade2: edade2,
    Nacimento2: ano2,
});
