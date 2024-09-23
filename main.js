let botaoAtivo = null;

function exibirImagem(opcao, botao) {
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    if(opcao === 'sol'){
        imagem.src ="sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
        document.querySelector("body").style.background = "#7fa3eb";
    } else if (opcao === 'lua'){
        imagem.src ="lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
        document.querySelector("body").style.background = "#1d2129"; 
    }else if (opcao === 'estrela'){
        imagem.src ="estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrala! Um ponto que ilumina a nossa noite.";
        document.querySelector("body").style.background = "#1c1d1f"; 
    }else if (opcao === 'nuvem'){
        imagem.src ="nuvem.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Nuvem! Você é passageiro.";
        document.querySelector("body").style.background = "#89a4c0"; 
    }else if (opcao === 'chuva'){
        imagem.src ="chuva.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Chuva! Você é rapido e triste.";
        document.querySelector("body").style.background = "#0056b3"; 
    }
     else {
        imagem.style.display = "none";
        texto.innerText = "Opção invalída. Escolha algo"
    }

    if(botaoAtivo) {
        botaoAtivo.classList.remove('active');
    }
    botao.classList.add('active');
    botaoAtivo = botao;
}