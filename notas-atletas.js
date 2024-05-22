function calcularMediaDasNotas(notasIntermediarias) {
    let somaDasNotas = 0;
    for (let i = 0; i < notasIntermediarias.length; i++) {
        somaDasNotas += notasIntermediarias[i];
    }
    return somaDasNotas / notasIntermediarias.length;
}

function calcularMediaDosAtletas(atletas) {
    atletas.forEach(function (atleta) {
        let nome = atleta.nome;
        let notas = atleta.notas;
        let notasOrdenadas = notas.slice().sort((a, b) => b - a);
        let notasIntermediarias = notasOrdenadas.slice(1, -1);

        let media = calcularMediaDasNotas(notasIntermediarias);

        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadas.join(',')}`);
        console.log(`Média Válida: ${media.toFixed(2)}\n`);
    });
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

calcularMediaDosAtletas(atletas);