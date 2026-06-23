const readline = require('readline');

// Configuração necessária para ler dados do terminal no Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (pergunta) => new Promise((resolve) => rl.question(pergunta + "\n", resolve));

// ==========================================
// 1. EXERCÍCIOS COM O LAÇO FOR
// ==========================================

async function exercicioNotas() {
    let somaNotas = 0;
    let maiorNota = 0;
    let menorNota = 10; 
    let acimaDeSete = 0;

    for (let i = 1; i <= 10; i++) {
        let nota = parseFloat(await prompt("Digite a nota do aluno " + i + ":"));
        
        somaNotas = somaNotas + nota;
        
        if (nota > maiorNota) maiorNota = nota;
        if (nota < menorNota) menorNota = nota;
        if (nota > 7) acimaDeSete = acimaDeSete + 1;
    }

    let media = somaNotas / 10;
    console.log("\nMédia da turma: " + media);
    console.log("Maior nota: " + maiorNota);
    console.log("Menor nota: " + menorNota);
    console.log("Alunos acima de 7: " + acimaDeSete);
    rl.close();
}

async function exercicioTemperatura() {
    let inicial = parseInt(await prompt("Digite a temperatura inicial em Celsius:"));
    let final = parseInt(await prompt("Digite a temperatura final em Celsius:"));

    for (let c = inicial; c <= final; c++) {
        let f = (c * 9/5) + 32;
        console.log(c + "°C é igual a " + f + "°F");
    }
    rl.close();
}

async function exercicioVendas() {
    let totalAno = 0;
    let maiorVenda = 0;
    let menorVenda = 99999999; 
    let mesMaior = 0;
    let mesMenor = 0;

    for (let mes = 1; mes <= 12; mes++) {
        let valor = parseFloat(await prompt("Digite a venda do mês " + mes + ":"));
        
        totalAno = totalAno + valor;
        
        if (valor > maiorVenda) {
            maiorVenda = valor;
            mesMaior = mes;
        }
        if (valor < menorVenda) {
            menorVenda = valor;
            mesMenor = mes;
        }
    }

    console.log("\nTotal do ano: R$ " + totalAno);
    console.log("Média por mês: R$ " + (totalAno / 12));
    console.log("Melhor mês: Mês " + mesMaior);
    console.log("Pior mês: Mês " + mesMenor);
    rl.close();
}

// ==========================================
// 2. EXERCÍCIOS COM O LAÇO WHILE
// ==========================================

async function exercicioCaixaEletronico() {
    let saldo = 2000;
    let opcao = "";

    while (opcao !== "Sair" && opcao !== "sair") {
        opcao = await prompt("\nSaldo: R$ " + saldo + "\nDigite: Sacar, Depositar ou Sair");
        
        if (opcao === "Sacar" || opcao === "sacar") {
            let saque = parseFloat(await prompt("Quanto deseja sacar?"));
            if (saque > saldo) {
                console.log("Você não tem saldo suficiente!");
            } else {
                saldo = saldo - saque;
            }
        }
        
        if (opcao === "Depositar" || opcao === "depositar") {
            let deposito = parseFloat(await prompt("Quanto deseja depositar?"));
            saldo = saldo + deposito;
        }
    }
    console.log("Obrigado por usar o caixa!");
    rl.close();
}

async function exercicioProdutosWhile() {
    let totalProdutos = 0;
    let totalItens = 0;
    let maiorQtd = 0;
    let produtoMaisEstocado = "";

    let nome = await prompt("Digite o nome do produto (ou FIM para parar):");

    while (nome !== "FIM" && nome !== "fim") {
        let qtd = parseInt(await prompt("Digite a quantidade de " + nome + ":"));
        
        totalProdutos = totalProdutos + 1;
        totalItens = totalItens + qtd;
        
        if (qtd > maiorQtd) {
            maiorQtd = qtd;
            produtoMaisEstocado = nome;
        }
        
        nome = await prompt("Digite o nome do próximo produto (ou FIM para parar):");
    }

    console.log("\nTotal de produtos diferentes: " + totalProdutos);
    console.log("Soma de todos os itens: " + totalItens);
    console.log("Produto com maior quantidade: " + produtoMaisEstocado);
    rl.close();
}

// ==========================================
// 3. EXERCÍCIOS COM O LAÇO DO...WHILE
// ==========================================

async function exercicioSenha() {
    let senhaCorreta = "1234";
    let CorporateTentativas = 0;
    let digitouCerto = false;

    do {
        let senha = await prompt("Digite a senha:");
        CorporateTentativas = CorporateTentativas + 1;
        
        if (senha === senhaCorreta) {
            digitouCerto = true;
        } else {
            console.log("Senha errada!");
        }
    } while (CorporateTentativas < 3 && digitouCerto === false);

    if (digitouCerto === true) {
        console.log("Acesso liberado");
    } else {
        console.log("Conta bloqueada");
    }
    rl.close();
}

async function exercicioCadastroPrecos() {
    let totalCadastrados = 0;
    let somaPrecos = 0;
    let maiorPreco = 0;
    let menorPreco = 999999;
    let maisCaro = "";
    let maisBarato = "";
    let querContinuar = "";

    do {
        let nome = await prompt("Nome do produto:");
        let preco = parseFloat(await prompt("Preço do produto:"));
        
        totalCadastrados = totalCadastrados + 1;
        somaPrecos = somaPrecos + preco;
        
        if (preco > maiorPreco) {
            maiorPreco = preco;
            maisCaro = nome;
        }
        if (preco < menorPreco) {
            menorPreco = preco;
            maisBarato = nome;
        }
        
        querContinuar = await prompt("Deseja cadastrar outro? (S para Sim / N para Não)");
    } while (querContinuar === "S" || querContinuar === "s");

    console.log("\nProdutos cadastrados: " + totalCadastrados);
    console.log("Preço médio: R$ " + (somaPrecos / totalCadastrados));
    console.log("Mais caro: " + maisCaro);
    console.log("Mais barato: " + maisBarato);
    rl.close();
}

async function exercicioVoltasCorredor() {
    let voltas = 0;
    let totalSegundos = 0;
    let melhorTempo = 999999; 
    let piorTempo = 0;        
    let outraVolta = "";

    do {
        voltas = voltas + 1;
        let tempo = parseFloat(await prompt("Tempo da volta " + voltas + " (em segundos):"));
        
        totalSegundos = totalSegundos + tempo;
        
        if (tempo < melhorTempo) melhorTempo = tempo;
        if (tempo > piorTempo) piorTempo = tempo;
        
        outraVolta = await prompt("Registrar outra volta? (S para Sim / N para Não)");
    } while (outraVolta === "S" || outraVolta === "s");

    console.log("\nTotal de voltas: " + voltas);
    console.log("Melhor tempo: " + melhorTempo + "s");
    console.log("Pior tempo: " + piorTempo + "s");
    console.log("Tempo médio: " + (totalSegundos / voltas) + "s");
    rl.close();
}

// CHAME A FUNÇÃO QUE VOCÊ QUER TESTAR AQUI EMBAIXO:
exercicioCaixaEletronico();