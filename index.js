

// botao.addEventListener('click', (e) => {
//     const input = document.getElementById('meu-input')
//     const inputNuber = document.getElementById('meu-input-nuber')
// const mensagem = input.value
// const mensagem2 = inputNuber.value

// const numero = '+559199069633'; // número de telefone do destinatário

// const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem, mensagem2)}`;
// window.open(url, '_blank');
// });


const input = document.getElementById('meu-input');
const clicar = document.getElementById('enviar')

input.addEventListener('input', (e) => {
    clicar.style.display = 'block'

});

clicar.addEventListener('click', (e => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        const sumir = document.querySelector('.formulario')
        sumir.innerHTML='<h2>Aguarde entraremos em contato com voce</h2>'

        const valor = input.value;
        const linkWhatsApp = `https://wa.me/send?l=pt&amp;phone=559199069633?text=${valor}`;
        window.open(linkWhatsApp, '_blank');

    });

}))




const opcoesGeral = document.querySelector('.opcoes-geral')
function mecher() {
    opcoesGeral.innerHTML = '<h1>EM MANUTENÇÃO</h1>  <p>Estamos buscando melhor praticidade pra você</p>'
    console.log(opcoesGeral)
}




const classVazia = document.querySelector('.mostrar-clicar')
function btnVisita() {
    const pegar1 = classVazia.childNodes[1]
    const pegar2 = classVazia.childNodes[3]
    const pegar3 = classVazia.childNodes[5]
    pegar1.style.display = 'block'
    pegar2.style.display = 'none'
    pegar3.style.display = 'none'

}
function btnIstalacao() {
    const pegar1 = classVazia.childNodes[1]
    const pegar2 = classVazia.childNodes[3]
    const pegar3 = classVazia.childNodes[5]
    pegar1.style.display = 'none'
    pegar2.style.display = 'block'
    pegar3.style.display = 'none'

}

function btnLimpeza() {
    const pegar1 = classVazia.childNodes[1]
    const pegar2 = classVazia.childNodes[3]
    const pegar3 = classVazia.childNodes[5]
    pegar1.style.display = 'none'
    pegar2.style.display = 'none'
    pegar3.style.display = 'block'

}


