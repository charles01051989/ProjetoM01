let prompt = require('prompt-sync')();
console.log("Arthur Dent é um homem normal,que está tendo um péssimo dia.\nApós saber que sua casa está prestes a ser demolida,Arthur\ndescobre que Ford Prefect, seu melhor amigo, é um extra-terrestre \ne, para completar, fica sabendo que  Terra está prestes a ser destruída para que\nse possa construir uma nova auto-estrada hiperespacial. Sem ter o que fazer\npara evitar a destruição de seu planeta, Arthur só tem uma saída: \npegar carona em uma nave espacial que está de passagem. Ele passa então\na conhecer o universo, sendo que tudo o que precisa saber sobre sua \nnova vida está contido em um valioso livro: O Guia do Mochileiro das Galáxias.");
const perguntas = ["Você teve participação destacada, na fuga da terra, momentos antes de ser destruída para construção da via intergalática?","Vocẽ contribui de forma efetiva para pegar carona na espaçonave vogon?","Você falhou ao tentar atenuar o pessimismo de Marvin?","Você achou a resposta para a questão fundamental uma profunda idiotíce?","Você considera questionável a escolha de Arthur Dent em relação a vestimenta?"]
let sim = 0
console.log(`\nResponda com SIM ou NÃO\n`)
for(let i = 0; i < perguntas.length; i++){
    let resp = prompt(`${[perguntas[i]]} `).toUpperCase()
    if (resp == "SIM") {
        sim++
    }
}
if (sim==0) {
    console.log(`Você falha miseravelmente!`);
}else if (sim<=2) {
    console.log(`Você falha, mas ainda consegue fugir da situação!`);
}else if (sim==3) {
    console.log(`Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco!`);
}else if (sim==4) {
    console.log(`Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita!`);
}else{
    console.log(`Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações!`);
}