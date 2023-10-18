/* 
let raçasDeCachorro = ["Shiba Inu", "Jack Russell Terrier", " Husky", "Pomeranian", "Corgi"]

raçasDeCachorro.push("Golden Retriever")

raçasDeCachorro.push("German Shepherd", "Pitbull")

raçasDeCachorro.splice(2, 3)

let numeroEscolhido = prompt("Digite um número de 0 a 4")

let raçaEscolhida = raçasDeCachorro[numeroEscolhido]

console.log(raçaEscolhida)


let numeros = [1, 2, 3, 4, 5, 6]

console.log(`Tamanho: ${numeros.length}`) // Tamanho

numeros.push(7) // Numero 7 adicionado

numeros.splice(3, 2) // 4 e 5 removidos

console.log(`Novo tamanho: ${numeros.length}`) // Novo tamanho


function imprimirNome(nome) {
    console.log(`Olá ${nome}`)
}

imprimirNome("Greg")

imprimirNome("Mateus")

imprimirNome("Ricardo")


function imprimirNome(nome1, nome2, nome3) {
console.log(`Olá ${nome1}
Olá ${nome2}
Olá ${nome3}
`)
}

imprimirNome("Greg", "Mateus", "Ricardo")


function calculaArea(altura, largura) {
    const area = altura * largura
    return area
}

const areaCalculada = calculaArea(2, 3)

console.log(calculaArea(2, 3))


function calculaNumeros(Numero1, Numero2) {
    const soma = Numero1 + Numero2
    return soma
}

console.log(calculaNumeros(5, 7))



//ja deixei na sua parte ;)

// Valeu.

// Começando objetos.


const theWalkingDead = {
  nome: "The Walking Dead",
  elenco: ["Andrew Lincoln", "Norman Reedus", "Jon Bernthal"],
  lançamento: "31 de outubro de 2010",
  diretor: "Frank Darabont",
  visto: true
}

console.log(`
Nome: ${theWalkingDead.nome}
Elenco: ${theWalkingDead.elenco}
Lançamento: ${theWalkingDead.lançamento}
Diretor: ${theWalkingDead["diretor"]}
Já foi visto?: ${theWalkingDead["visto"]}
`)


const pessoa = {
    nome: "Gregório",
    idade: 16,
    gêneroMusical: "Rhythm and Blues"
}

console.log("O nome da pessoa é " + pessoa.nome + ", ela tem " + pessoa.idade + " anos e gosta muito de " + pessoa.gêneroMusical + ".")


const donoDoPet = {
    nome: "Gabriel Vitor",
    pet: {
        nomeDoPet: "Joaquim González Terceiro",
        raça: "Lulu da Pomerânia",
        idade: 1
    }
}

console.log(donoDoPet.pet.nomeDoPet)


const professores = [
 {nome: "Andrei", module: 1},
 {nome: "Vitor", module: 2},
 {nome: "Mina", module: 3}
]

professores.novoProfessor = {nome: "Maria", moduleParaNovoProfessor: 4}

//professores.moduleParaNovoProfessor = 4

const theWalkingDead = {
    nome: "The Walking Dead",
    elenco: ["Andrew Lincoln", "Norman Reedus", "Jon Bernthal"],
    lançamento: "31 de outubro de 2010",
    diretor: "Frank Darabont",
    visto: true
  }

theWalkingDead.personagens = ["Rick Grimes", "Daryl Dixon", "Shane Walsh"]


  console.log(`
  Starring: ${theWalkingDead.elenco[0] + " as " + theWalkingDead.personagens[0]}
          ${theWalkingDead.elenco[1] + " as " + theWalkingDead.personagens[1]}
          ${theWalkingDead.elenco[2] + " as " + theWalkingDead.personagens[2]}
`)

theWalkingDead.elenco[0] = "Xuxa"

console.log(`
Starring: ${theWalkingDead.elenco[0] + " as " + theWalkingDead.personagens[0]}
`)

console.log(theWalkingDead)


let pessoa1 = {
    nome: "Gregório",
    idade: 16
}

function pessoa(pessoa1) {
 const pessoaNova = {
    ...pessoa1,
       comidasPreferidas: ["Strogonoff", "Churrasco", "Xis"],
         melhorAmigo: {
           nomeAmigo: "Kenyon",
           idadeAmigo: 15
       }
    }
console.log("O nome da pessoa é " + pessoaNova.nome + " e suas comidas preferidas são " + pessoaNova.comidasPreferidas[0] + ", " + pessoaNova.comidasPreferidas[1] + " e " + pessoaNova.comidasPreferidas[2] + ". Seu melhor amigo se chama " + pessoaNova.melhorAmigo.nomeAmigo + " e tem " + pessoaNova.melhorAmigo.idadeAmigo + " anos.")
}

pessoa(pessoa1)


let num1 = prompt("Digite um número.")

let num2 = prompt("Digite um número.")

function numberComparator() {
   if (num1 > num2) {
    console.log("Number 1 is bigger than number 2.")
   } else if (num1 < num2) {
    console.log("Number 1 is smaller than number 2.")
   } else {
    console.log("Both numbers are the same.")
   }
}

numberComparator()


let pokemonInicial = prompt("Choose your starter pokemon. Bulbasaur, Charmander or Squirtle.")

switch (pokemonInicial) {
    case "Bulbasaur":
        console.log("Grass/poison.")
        break
    case "Charmander":
        console.log("Fire")
        break
    case "Squirtle":
        console.log("Water")
        break
    default:
        console.log("Unrecognized starter pokemon, try again.")
        break
}


let ensinoMédioCompleto = prompt("Você completou o ensino médio?")

let maiorDeIdade = prompt("Você é maior de idade?")

let nãoCursandoFaculdade = prompt("Você esta cursando faculdade?")

function podeEstudarFaculdade() {
   switch (ensinoMédioCompleto) {
    case "Sim":
        ensinoMédioCompleto = true
        break
    default:
        ensinoMédioCompleto = false
        break
   }
   switch (maiorDeIdade) {
    case "Sim":
        maiorDeIdade = true
        break
    default:
        maiorDeIdade = false
        break
   }
   switch (nãoCursandoFaculdade) {
    case "Não":
        nãoCursandoFaculdade = true
        break
    default:
        nãoCursandoFaculdade = false
        break
   }
if (nãoCursandoFaculdade && ensinoMédioCompleto && maiorDeIdade) {
    console.log("Parabéns! Você pode cursar uma faculdade.")
 } else {
    console.log("Você não pode cursar uma faculdade.")
 }
}

podeEstudarFaculdade()

// Menor e usando comparadores.

let ensinoMédioCompleto = prompt("Você completou o ensino médio?") === "Sim"

let maiorDeIdade = prompt("Você é maior de idade?") === "Sim"

let nãoCursandoFaculdade = prompt("Você esta cursando faculdade?") === "Não"

function podeEstudarFaculdade(completo, cursando, maior) {
if (cursando && completo && maior) {
    console.log("Parabéns! Você pode cursar uma faculdade.")
 } else {
    console.log("Você não pode cursar uma faculdade.")
 }
}

podeEstudarFaculdade(ensinoMédioCompleto, maiorDeIdade, nãoCursandoFaculdade)


let volta = 0

while (volta < 10) {
    console.log(volta)
  volta++
}


let numbers = Number(prompt("Insira um numero"))
let soma = 0

while (numbers !== 0) {
    soma = soma + numbers
    numbers = Number(prompt("Insira um numero"))
}

console.log("A soma será: " + soma)


for(let volta = 0; volta < 10; volta++) {
    console.log(volta)
}


let numberArray = [12, 16, 74, 34, 56, 97, 46, 9, 5, 8, 2, 4, 7]

let highestElement = numberArray[0]

function highestNumberCheck(array) {
 for(let i = 0; i < numberArray.length; i++) {
    if (array[i] > highestElement) {
        highestElement = array[i]
    }
 }
console.log(`O maior número é ${highestElement}`)
}

highestNumberCheck(numberArray)


const numeros = [23, 65, 34, 86, 24]

for (let numero of numeros) {
    console.log(numero)
}

---

let voltas = 0 
while (voltas < 20) {
    voltas++
    console.log(voltas)
}


let voltas = 0 
while (voltas < 20) {
    voltas++
    if (voltas === 20) {
        console.log("Robert Mcrats ganha com 20 voltas!")
    } else {
        console.log(voltas)
    }
}

let beep = 10
while (beep > 0) {
    if (beep % 2 === 0) {
        console.log(beep + " Tick")
    } else {
        console.log(beep + " Beep")
    }
    beep--
}
console.log("Boom!!")

 Talita code ---

let beep = 10
while (beep > 0) {
    beep--
    if (beep % 2 === 0) {
        console.log(beep + " Tick")
    } else if (beep % 2 !== 0) {
        console.log(beep + " Beep")
    } else {
    } 
}
console.log("Boom!!")

---

for (let beep = 10; beep > 0; beep--) {
    console.log(beep)
}
console.log("Boom!!!")

*/

for (let beep = 10; beep > 0; beep--) {
    if (beep % 2 === 0) {
        console.log(beep + " tick")
    } else {
        console.log(beep + " tack")
    }
    
}
console.log("Boom!!!")

