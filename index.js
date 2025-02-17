const botao = document.getElementById('enviar');

botao.addEventListener('click', (e) => {
    const input = document.getElementById('meu-input')
    const inputNuber = document.getElementById('meu-input-nuber')
    const mensagem = input.value
    const mensagem2 = inputNuber.value

    const numero = '+559199069633'; // número de telefone do destinatário

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem, mensagem2)}`;
    window.open(url, '_blank');
});




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


