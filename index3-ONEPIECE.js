var readlineSync = require('readline-sync');

/*
1. Cadastre 5 tripulações piratas, solicitando o nome de cada uma por meio do prompt.
 Cada tripulação terá um capitão e sua equipe.

2. A corrida consistirá em 10 etapas, e a cada etapa, as tripulações se movem
 em direção ao One Piece. Utilize um loop para simular as etapas da corrida.

---

3. A cada etapa, role um dado virtual de 6 lados para determinar quantos metros
 cada tripulação avança. O dado representa os ventos favoráveis e obstáculos no caminho.

4. Atualize a posição de cada tripulação a cada etapa e exiba a posição atual
 no final de cada etapa.

5. A tripulação que alcançar a posição 100 metros primeiro será a vencedora
 e encontrará o One Piece.

6. Exiba o nome da tripulação vencedora que encontrou o One Piece
 e parabenize o capitão por sua conquista lendária.
*/

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

/*
console.log(`Wealth, fame, power.
Gold Roger the king of the pirates obtained this and everything else the
World had to offer. And his dying words drove countless souls to the seas.
“You want my treasure? You can have it! I left everything I gathered
Together in one place. Now you just have to find it!”
These words lured men to the grand line, pursuing dreams greater than they
Ever dared to imagine. This is the time known as the great pirate era.`)

*/

let trip1 = {
    nomeTrip: readlineSync.question("What's the name of the first pirate crew?"),
    nomeCap: readlineSync.question("What's the name of the first pirate captain?"),
    tripDis: 0
}

let trip2 = {
    nomeTrip: readlineSync.question("What's the name of the second pirate crew?"),
    nomeCap: readlineSync.question("What's the name of the second pirate captain?"),
    tripDis: 0
}
let trip3 = {
    nomeTrip: readlineSync.question("What's the name of the third pirate crew?"),
    nomeCap: readlineSync.question("What's the name of the third pirate captain?"),
    tripDis: 0
}
let trip4 = {
    nomeTrip: readlineSync.question("What's the name of the fourth pirate crew?"),
    nomeCap: readlineSync.question("What's the name of the fourth pirate captain?"),
    tripDis: 0
}
let trip5 = {
    nomeTrip: readlineSync.question("What's the name of the fifth pirate crew?"),
    nomeCap: readlineSync.question("What's the name of the fifth pirate captain?"),
    tripDis: 0
}

for (let etapas = 1; etapas <= 10; etapas++) {
    trip1.tripDis = trip1.tripDis + rolarDado()
    trip2.tripDis = trip2.tripDis + rolarDado()
    trip3.tripDis = trip3.tripDis + rolarDado()
    trip4.tripDis = trip4.tripDis + rolarDado()
    trip5.tripDis = trip5.tripDis + rolarDado()

    console.log(`
    O capitão ${trip1.nomeCap} e a tripulação dos ${trip1.nomeTrip} está nos ${trip1.tripDis} metros de distância na ${etapas} etapa da corrida!
    O capitão ${trip2.nomeCap} e a tripulação dos ${trip2.nomeTrip} está nos ${trip2.tripDis} metros de distância na ${etapas} etapa da corrida!
    O capitão ${trip3.nomeCap} e a tripulação dos ${trip3.nomeTrip} está nos ${trip3.tripDis} metros de distância na ${etapas} etapa da corrida!
    O capitão ${trip4.nomeCap} e a tripulação dos ${trip4.nomeTrip} está nos ${trip4.tripDis} metros de distância na ${etapas} etapa da corrida!
    O capitão ${trip5.nomeCap} e a tripulação dos ${trip5.nomeTrip} está nos ${trip5.tripDis} metros de distância na ${etapas} etapa da corrida!
    `)
}