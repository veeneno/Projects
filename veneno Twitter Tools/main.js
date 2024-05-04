const fs = require('fs');
const prompt = require('prompt-sync')();

function printPurpleAscii(text) {
    console.log('\x1b[35m' + text + '\x1b[0m');
}

async function main() {
    printPurpleAscii(`
                by veneno    twitter: veeneeno
 ██▒   █▓▓█████  ███▄    █ ▓█████  ███▄    █  ▒█████     ▄▄▄█████▓ █     █░ ██▓▄▄▄█████▓▄▄▄█████▓▓█████  ██▀███     ▄▄▄█████▓ ▒█████   ▒█████   ██▓      ██████ 
▓██░   █▒▓█   ▀  ██ ▀█   █ ▓█   ▀  ██ ▀█   █ ▒██▒  ██▒   ▓  ██▒ ▓▒▓█░ █ ░█░▓██▒▓  ██▒ ▓▒▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒   ▓  ██▒ ▓▒▒██▒  ██▒▒██▒  ██▒▓██▒    ▒██    ▒ 
 ▓██  █▒░▒███   ▓██  ▀█ ██▒▒███   ▓██  ▀█ ██▒▒██░  ██▒   ▒ ▓██░ ▒░▒█░ █ ░█ ▒██▒▒ ▓██░ ▒░▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒   ▒ ▓██░ ▒░▒██░  ██▒▒██░  ██▒▒██░    ░ ▓██▄   
  ▒██ █░░▒▓█  ▄ ▓██▒  ▐▌██▒▒▓█  ▄ ▓██▒  ▐▌██▒▒██   ██░   ░ ▓██▓ ░ ░█░ █ ░█ ░██░░ ▓██▓ ░ ░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄     ░ ▓██▓ ░ ▒██   ██░▒██   ██░▒██░      ▒   ██▒
   ▒▀█░  ░▒████▒▒██░   ▓██░░▒████▒▒██░   ▓██░░ ████▓▒░     ▒██▒ ░ ░░██▒██▓ ░██░  ▒██▒ ░   ▒██▒ ░ ░▒████▒░██▓ ▒██▒     ▒██▒ ░ ░ ████▓▒░░ ████▓▒░░██████▒▒██████▒▒
   ░ ▐░  ░░ ▒░ ░░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░   ▒ ▒ ░ ▒░▒░▒░      ▒ ░░   ░ ▓░▒ ▒  ░▓    ▒ ░░     ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░     ▒ ░░   ░ ▒░▒░▒░ ░ ▒░▒░▒░ ░ ▒░▓  ░▒ ▒▓▒ ▒ ░
   ░ ░░   ░ ░  ░░ ░░   ░ ▒░ ░ ░  ░░ ░░   ░ ▒░  ░ ▒ ▒░        ░      ▒ ░ ░   ▒ ░    ░        ░     ░ ░  ░  ░▒ ░ ▒░       ░      ░ ▒ ▒░   ░ ▒ ▒░ ░ ░ ▒  ░░ ░▒  ░ ░
     ░░     ░      ░   ░ ░    ░      ░   ░ ░ ░ ░ ░ ▒       ░        ░   ░   ▒ ░  ░        ░         ░     ░░   ░      ░      ░ ░ ░ ▒  ░ ░ ░ ▒    ░ ░   ░  ░  ░  
      ░     ░  ░         ░    ░  ░         ░     ░ ░                  ░     ░                       ░  ░   ░                     ░ ░      ░ ░      ░  ░      ░  
     ░                                                                                                                                                          
                                                             iza <3                             
`);

console.log('\x1b[36m' + 'Escolha o módulo que deseja usar:' + '\x1b[0m');
console.log('\x1b[32m' + '1. SB Tool' + '\x1b[0m');
console.log('\x1b[33m' + '2. UNF Tool' + '\x1b[0m');
console.log('\x1b[34m' + '3. NM Tool' + '\x1b[0m');

const moduleChoice = prompt('> ');

if (moduleChoice === '1') {
    console.log('\x1b[35m' + 'Executando SB Tool' + '\x1b[0m');
    console.log('\x1b[36m' + 'Escolha o idioma do seu twitter' + '\x1b[0m');
    console.log('\x1b[32m' + '1. Ingles' + '\x1b[0m');
    console.log('\x1b[33m' + '2. Portugues' + '\x1b[0m');
    console.log('\x1b[31m' + '0. voltar' + '\x1b[0m');

    const languageChoice = prompt('> ');

    if (languageChoice === '1') {
        console.log('\x1b[35m' + 'Executando em ingles' + '\x1b[0m');
        const { username, password, numDeSB, head } = getUsernameAndPassword();
        await require('./tools/SB Tool/sben.js')(username, password, numDeSB, head);
    } else if (languageChoice === '2') {
        console.log('\x1b[35m' + 'Executando em portugues' + '\x1b[0m');
        const { username, password, numDeSB, head } = getUsernameAndPassword();
        await require('./tools/SB Tool/sbpt.js')(username, password, numDeSB, head);
    } else if (languageChoice === '0') {
        console.clear();
        console.log('\x1b[35m' + 'voltando...' + '\x1b[0m');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.clear();
        main();
    }else {
        console.error('\x1b[31m' + 'Escolha inválida' + '\x1b[0m');
    }
} 
else if (moduleChoice === '2') {
    console.log('\x1b[35m' + 'Executando UNF Tool' + '\x1b[0m');
    console.log('\x1b[36m' + 'Escolha o idioma do seu twitter' + '\x1b[0m');
    console.log('\x1b[32m' + '1. Ingles' + '\x1b[0m');
    console.log('\x1b[33m' + '2. Portugues' + '\x1b[0m');
    console.log('\x1b[31m' + '0. voltar' + '\x1b[0m');

    const languageChoice = prompt('> ');

    if (languageChoice === '1') {
        console.log('\x1b[35m' + 'Executando em ingles' + '\x1b[0m');
        const { username, password, numDeSB, head} = getUsernameAndPassword();
        await require('./tools/UNF Tool/unfen.js')(username, password, numDeSB, head);
    } else if (languageChoice === '2') {
        console.log('\x1b[35m' + 'Executando em portugues' + '\x1b[0m');
        const { username, password, numDeSB, head} = getUsernameAndPassword();
        await require('./tools/UNF Tool/unfpt.js')(username, password, numDeSB, head);
    } else if (languageChoice === '0') {
        console.clear();
        console.log('\x1b[35m' + 'voltando...' + '\x1b[0m');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.clear();
        main();
    }else {
        console.error('\x1b[31m' + 'Escolha inválida' + '\x1b[0m');
    }
} else if (moduleChoice === '3'){
    console.log('\x1b[35m' + 'Executando NM Tool' + '\x1b[0m');
    console.log('\x1b[36m' + 'Escolha o idioma do seu twitter' + '\x1b[0m');
    console.log('\x1b[32m' + '1. Ingles' + '\x1b[0m');
    console.log('\x1b[33m' + '2. Portugues' + '\x1b[0m');
    console.log('\x1b[31m' + '0. voltar' + '\x1b[0m');

    const languageChoice = prompt('> ');

    if (languageChoice === '1') {
        console.log('\x1b[35m' + 'Executando em ingles' + '\x1b[0m');
        const { username, password, numDeSB, head} = getUsernameAndPassword();
        await require('./tools/NM Tool/nmen.js')(username, password, numDeSB, head);
    } else if (languageChoice === '2') {
        console.log('\x1b[35m' + 'Executando em portugues' + '\x1b[0m');
        const { username, password, numDeSB, head} = getUsernameAndPassword();
        await require('./tools/NM Tool/nmpt.js')(username, password, numDeSB, head);
    } else if (languageChoice === '0') {
        console.clear();
        console.log('\x1b[35m' + 'voltando...' + '\x1b[0m');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.clear();
        main();
    }else {
        console.error('\x1b[31m' + 'Escolha inválida' + '\x1b[0m');
    }
}
else {
    console.error('\x1b[31m' + 'Escolha inválida' + '\x1b[0m');
}
}

function getUsernameAndPassword() {
    console.log('\x1b[36m' + 'Digite seu nome de usuário:' + '\x1b[0m');
    const username = prompt('> ');
    console.log('\x1b[36m' + 'Digite sua senha:' + '\x1b[0m');
    const password = prompt('> ', { echo: '*' }); 
    console.log('\x1b[36m' + 'Quantas contas deseja verificar para seu procedimento?:' + '\x1b[0m');
    const numDeSB = Number(prompt('> ')); 
    const head = "";

    console.log('\x1b[36m' + 'Digite os usernames que vao ser pulados (quem nao deve receber sb ou unf) (separados por um espaço e sem @):' + '\x1b[0m');
    console.log('\x1b[36m' + 'Voce pode tirar ou adicionar um usuario manualmente em /config' + '\x1b[0m');
    const forbiddenUsers = prompt('> ');

    const formattedForbiddenUsers = forbiddenUsers;

    saveForbiddenUsers(formattedForbiddenUsers);

    return { username, password, numDeSB };
}

async function saveForbiddenUsers(forbiddenUsers) {
    try {
        // Formatando corretamente a lista de usuários proibidos
        const formattedForbiddenUsers = forbiddenUsers.split(' ').join('\n');
        fs.appendFileSync('./config/config.txt', '\n' + formattedForbiddenUsers);
        console.log('\x1b[32m' + 'Lista de "@" proibidos adicionada com sucesso em config.txt' + '\x1b[0m');
        
        // Remover linhas em branco
        const content = fs.readFileSync('./config/config.txt', 'utf-8');
        const nonEmptyLines = content.split('\n').filter(line => line.trim() !== '');
        fs.writeFileSync('./config/config.txt', nonEmptyLines.join('\n'));
    } catch (error) {
        console.error('\x1b[31m' + 'Erro ao adicionar a lista de "@" proibidos em config.txt' + '\x1b[0m');
    }
}

main().catch(error => console.error('\x1b[31m' + 'Erro ao executar o script:' + '\x1b[0m', error));
