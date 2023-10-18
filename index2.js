// 1.

const anoDeNascimento = 2007
const anoAtual = 2023

let idade1 = anoAtual - anoDeNascimento

console.log(`Exercise 1:
Minha idade é: ${idade1}
`)

// 2.

let number1 = 52
let number2 = 48
 sum = number1 + number2
 subtraction = number1 - number2
 multiplication = number1 * number2
 division = number1 / number2
 modulo = number1 % number2

console.log(`
Exercise 2:
sum: ${sum}
subtraction: ${subtraction}
multiplication: ${multiplication}
division: ${division}
module: ${modulo}
`)

// 3.

let numero1 = 40
let numero2 = 50

console.log(`
Exercise 3:
Numero1 é igual ao numero2?: ${numero1 === numero2}
Numero1 é diferente do numero2?: ${numero1 !== numero2}
Numero1 é maior do que o numero2?: ${numero1 > numero2}
Numero1 é maior ou igual ao o numero2?: ${numero1 >= numero2}
Numero1 é menor do que o numero2?: ${numero1 < numero2}
Numero1 é menor ou igual ao o numero2?: ${numero1 <= numero2}
`)

// 4.

let temIdadeParaDirigir = false

let temCarteiraDeMotorista = false

let TemCarroProprio = false

console.log("Exercise 4:")

if (temIdadeParaDirigir && temCarteiraDeMotorista) {
    console.log("Você pode dirigir legalmente!")
} else if (TemCarroProprio || temCarteiraDeMotorista) {
    console.log("Você pode dirigir, mas seja cuidadoso!")
} else {
    console.log("Você não pode dirigir.")
}

// 5.

let nomes = [" GrEgóRiO ", " MaTeUs ", " RiCardO "]

console.log(`
Exercise 5:
Letras minúsculas: ${nomes[0].toLowerCase()} ${nomes[1].toLowerCase()} ${nomes[2].toLowerCase()}
Letras maiúsculas: ${nomes[0].toUpperCase()} ${nomes[1].toUpperCase()} ${nomes[2].toUpperCase()}
Sem espaços: ${nomes[0].trim()} ${nomes[1].trim()} ${nomes[2].trim()}
Contém 'a': ${nomes[0].includes("a")} ${nomes[1].includes("a")} ${nomes[2].includes("a")}
Substituir 'a': ${nomes[0].replaceAll("a", "#")} ${nomes[1].replaceAll("a", "#")} ${nomes[2].replaceAll("a", "#")}
`)

// 6.

let nome = "Gregório"
let idade = 16
let cidade = "São Leopoldo"

mensagem = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`

console.log(`Exercise 6:
${mensagem}
`)

mensagem = ("Olá, meu nome é " + nome + ", " + "tenho " + idade + " anos e moro em " + cidade + ".")

console.log(mensagem)

// 7.

console.log("Exercise 7:")

function calcularQuadrado(lados) {
    const areaQuadrado = lados * lados
    console.log(`
    Area de um quadrado: ${areaQuadrado}
    `)
}

function calcularRetangulo(altura, largura) {
    const areaRetangulo = altura * largura
    console.log(`
    Area de um retangulo: ${areaRetangulo}
    `)
}

function calcularTriangulo(altura, largura) {
    const areaTriangulo = (altura * largura) / 2
    console.log(`
    Area de um triângulo: ${areaTriangulo}
    `)
}

calcularQuadrado(5)
calcularRetangulo(2, 4)
calcularTriangulo(3, 8)

// 8.

console.log("Exercise 8:")

const aluno = {
    nome1: "João",
    idade2: 17,
    curso: "3 mil produtores"
}

console.log(aluno)

aluno.notas = [50, 78, 43]
aluno.média = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) /3

console.log(aluno)

aluno.endereço = {
    país: "Angola",
    anoNaEscola: 8,
    cidade: "Bula Atumba"
}

console.log(aluno)

// 9/10.

let genero = "ficção"

console.log("Exercise 9/10:")

if (genero === "ação") {
    console.log("Você gosta de filmes de ação! Explosões e perseguições são incríveis.")
} else if (genero === "comédia") {
    console.log("Você gosta de filmes de comédia! Rir é o melhor remédio.")
} else if (genero === "terror") {
    console.log("Você gosta de filmes de terror! Prepare-se para muitos sustos.")
} else if (genero === "ficção") {
    console.log("Você gosta de filmes de ficção científica! Viaje para outros mundos e realidades.")
} else if (genero === "aventura") {
    console.log("Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes.")
} else {
    console.log("Não sei qual é o seu gênero de filme favorito.")
}

// 11.

let contagem = 100

console.log("Exercise 11:")

while (contagem >= 0) {
    console.log("Contagem atual: " + contagem)
    contagem--
}

console.log("Contagem regressiva concluída!")

// 12.

console.log("Exercise 12:")

function calculator(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            operacao = num1 + num2
            break;
        case "-":
            operacao = num1 - num2
            break
        case "*":
            operacao = num1 * num2
            break
        case "/":
            operacao = num1 / num2
        default:
            console.log("Operação inválida!")
            break;
    }
console.log(operacao)
}

calculator(10, 20, "-")

// 13.

console.log("Exercise 13:")

for (let i = 1; i <= 10; i++) {
    console.log("6 x " + i + " = " + 6 * i)
}