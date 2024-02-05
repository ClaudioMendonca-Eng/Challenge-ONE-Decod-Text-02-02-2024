const principalTextarea = document.getElementById("principal__textarea");
const btnCriptografar = document.getElementById("btn__criptografar");
const btnDescriptografar = document.getElementById("btn__descriptografar");
const sectionResultado = document.getElementById("resultado");
let botaoCopy = document.getElementById("btn__copiar");

function trocarEstilo() {
    const stylesheet = document.getElementById('stylesheet');
    const imagemBn = document.getElementById('trocarEstilo');
    const imagemPesonagem = document.getElementById('personagem');
    

    if (imagemBn.src.includes('img/lua.png')) {
        // Se for a imagem original, troca para a segunda imagem
        imagemBn.src = 'img/sol.png';
        stylesheet.href = 'styles/style_escuro.css';
        imagemPesonagem.src = 'img/resultado_escuro.png';
    } else {
        // Se for a segunda imagem, troca de volta para a original
        imagemBn.src = 'img/lua.png';
        stylesheet.href = 'styles/style.css';
        imagemPesonagem.src = 'img/resultado.png';
    }
    
    
}

// Oculta o botão
botaoCopy.style.display = "none";




