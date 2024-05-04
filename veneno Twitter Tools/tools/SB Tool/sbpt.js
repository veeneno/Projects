const fs = require('fs'); 

async function ptScript(username, password, numDeSB, head) {

    console.log("sbpt sendo executado")
    
    const puppeteer = require('puppeteer-core');
    const prompt = require('prompt-sync')();

    function printPurpleAscii(text) {
        console.log('\x1b[35m' + text + '\x1b[0m');
      }
      
      let forbiddenUsers = [];
      try {
            if (fs.existsSync('./config/config.txt')) {
                const content = fs.readFileSync('./config/config.txt', 'utf8').trim();
                if (content !== '' && content !== '@') {
                    forbiddenUsers = content.split('\n').map(user => user.trim());
                } else if (content === '@') {
                    console.log('\x1b[33m' + 'Arquivo config.txt contém apenas "@".' + '\x1b[0m');
                } else {
                    console.log('\x1b[33m' + 'Arquivo config.txt está vazio. Nenhum "@" proibido será considerado.' + '\x1b[0m');
                }
            } else {
                console.log('\x1b[33m' + 'Arquivo config.txt não encontrado. Nenhum "@" proibido será considerado.' + '\x1b[0m');
            }
        } catch (error) {
            console.error('\x1b[31m' + 'Erro ao ler os "@" proibidos de config.txt' + '\x1b[0m');
        }

      (async () => {
          printPurpleAscii(`
                            by veneno    twitter: veeneeno
        __   __  ___   _  _   ___   _  _    ___      ___   ___     _____    ___     ___    _    
        v v / / | __| | n| | | __| | n| |  / _ o    / __| | _ )   |_   _|  / _ o   / _ o  | |   
         v V /  | _|  | .  | | _|  | .  | | (_) |   s__ s | _ b     | |   | (_) | | (_) | | |__ 
          v_/   |___| |_|n_| |___| |_|n_|  o___/    |___/ |___/     |_|    o___/   o___/  |____|
                                                                     iza <3                             
          `);

    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: true 
    });

    const page = await browser.newPage();
    let totalSB
    async function clicarNoBlock(){
        await new Promise(resolve => setTimeout(resolve, 100));
        await page.evaluate(() => {
            const buttons = [...document.querySelectorAll('div[data-testid="block"]')];
            const blockButton = buttons.find(button => button.textContent.trim().startsWith('Block'));
            if (blockButton) {
                blockButton.click();
            } else {
                throw new Error('Botão "Block" não encontrado');
            }
        });
    }
    async function clicarNoBlockBR(){
        await new Promise(resolve => setTimeout(resolve, 100));
        await page.evaluate(() => {
            const buttons = [...document.querySelectorAll('div[data-testid="block"]')];
            const blockButton = buttons.find(button => button.textContent.trim().startsWith('Bloquear'));
            if (blockButton) {
                blockButton.click();
            } else {
                throw new Error('Botão "Block" não encontrado');
            }
        });
    }
    async function clicarNoBotaoPeloNome(tempo, nomedobotao) {
        await new Promise(resolve => setTimeout(resolve, tempo));
        await page.evaluate((nomedobotao) => {
            const button = [...document.querySelectorAll('span.css-1qaijid')].find(element => element.innerText === nomedobotao);
            if (button) button.click();
            else throw new Error(`Elemento ${nomedobotao} não encontrado`);
        }, nomedobotao);
    }
    async function clicarNoFollowing() {
        await new Promise(resolve => setTimeout(resolve, 500));
        await page.evaluate(() => {
            const div = document.querySelector('div[aria-describedby="id__i3kymn4dfvc"]');
            if (div) {
                const button = [...div.querySelectorAll('span.css-1qaijid')].find(element => element.innerText === "Following");
                if (button) {
                    button.click();
                } else {
                    throw new Error("Botão Following não encontrado dentro da div.");
                }
            } else {
                throw new Error("Div não encontrada.");
            }
        });
    }

    try {
        await page.goto('https://twitter.com/login?lang=pt'); 
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.type('input[name="text"]', username);
        await clicarNoBotaoPeloNome(100, "Avançar")
        await new Promise(resolve => setTimeout(resolve, 1500));
        await page.type('input[type="password"]', password);
        await clicarNoBotaoPeloNome(100, "Entrar")
        await new Promise(resolve => setTimeout(resolve, 3000));
        await page.goto(`https://twitter.com/${username}/followers`); 
        await new Promise(resolve => setTimeout(resolve, 3000));

        for (let i = 0; i < numDeSB; i++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            const cellInnerDivContent = await page.$eval(`div[data-testid="cellInnerDiv"]:nth-child(${i + 1})`, element => element.textContent);
            const isFollowing = cellInnerDivContent.includes('Seguindo');
            const isFollow = cellInnerDivContent.includes('Seguir');

            const cellInnerDiv = await page.$(`div[data-testid="cellInnerDiv"]:nth-child(${i + 1})`);
            const href = await cellInnerDiv.$eval('a', a => a.getAttribute('href'));
            if (forbiddenUsers.includes(href.split('/')[1])) {
                console.log(`Usuário ${href.split('/')[1]} está na lista de usernames proibidos. Pulando para o próximo.`);
                continue;
            }
            if (isFollowing) {
                console.log(`soft-blocing (${i + 1}) ${href.split('/')[1]} ...`);
                await page.click(`div[data-testid="cellInnerDiv"]:nth-child(${i + 1}) .r-4qtqp9.r-yyyyoo.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-1xvli5t.r-1hdv0qi`);
                await new Promise(resolve => setTimeout(resolve, 300));
                await clicarNoBlockBR()
                await clicarNoBotaoPeloNome(100, "Bloquear")
                await clicarNoBotaoPeloNome(100, "Bloqueado")
                await clicarNoBotaoPeloNome(100, "Desbloquear")
                totalSB++;

            } else if (isFollow) {
            console.log(`soft-blocing (${i + 1}) ${href.split('/')[1]} ...`);
            await page.click(`div[data-testid="cellInnerDiv"]:nth-child(${i + 1}) .r-4qtqp9.r-yyyyoo.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-1xvli5t.r-1hdv0qi`);
            await new Promise(resolve => setTimeout(resolve, 300));
            await clicarNoBlockBR()
            await clicarNoBotaoPeloNome(100, "Bloquear")
            await clicarNoBotaoPeloNome(100, "Bloqueado")
            await clicarNoBotaoPeloNome(100, "Desbloquear")
            totalSB++;
            } else {
            console.log(`SB ${i + 1}: O texto do botão não corresponde a "Following" ou "Follow".`);
            }
        }
        


    } catch (error) {
        console.error('Ocorreu um erro ao abrir o site:', error);
    } finally {
        
    }
    })();

}

module.exports = ptScript;


