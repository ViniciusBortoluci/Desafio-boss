const nomeHeroi = "Javaman";
let xpHeroi = 0; //Coloque o XP do heroi


let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (xpHeroi <= 1000) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[0] );
}else if (xpHeroi>= 1001 && xpHeroi <= 2000) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[1]  );
}else if (xpHeroi >= 2001 && xpHeroi <= 5000) { 
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[2] );
}else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[3] );
}else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[4] );
}else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[5] );
}else if (xpHeroi >= 9001 && xpHeroi <= 10000) { 
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[6] );
}else if (xpHeroi >= 10001) {
    console.log("O heroi de nome " + nomeHeroi + " está no vível de " + nivelHeroi[7] );
}




