let herois = [
    {nome:"Chapolin", xp: 900 },
    {nome:"Batman", xp: 1999 },
    {nome:"Super-man", xp: 4369 },
    {nome:"Hulk", xp: 5555 },
    {nome:"Aquaman", xp: 7777 },
    {nome:"Subzero", xp: 8888},
    {nome:"Goku", xp: 9999 },
    {nome:"Naruto", xp: 10555}
]
let niveis = []

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i]
    let nivel
    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1000 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    niveis.push({nome: heroi.nome, nivel: nivel})
    console.log(`O Herói de nome ${heroi.nome} está no nivel de ${nivel}`)
}

console.log(niveis)