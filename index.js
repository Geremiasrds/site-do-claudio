const nome = document.getElementById('nome');
const resultadoVazio = document.getElementById("vazio-input")
const numero = document.getElementById('numero')
const clicar = document.getElementById('enviar')
clicar.addEventListener('click',(e=>{invocacao()}))
    
function invocacao() {
    const pegarValorDoNome = nome.value
    const pegarvalorDoNumero = numero.value
    const sumir = document.querySelector('.formulario')
    console.log(pegarValorDoNome)
    console.log(pegarvalorDoNumero)

    if (pegarValorDoNome === '' || pegarvalorDoNumero === '') {
        nome.style.border='1px solid red'
        numero.style.border='1px solid red'
               resultadoVazio.innerHTML = '<div >Preencha todos os campos!</div>'
               resultadoVazio.style.display='block'
    } else {
        sumir.innerHTML = `
        <div class='resultado-geral-input'>
          <h4>OBRIGADO!</h4>
        <p>Aguarde! entraremos em contato com você!</p>
      <div class='resultado-dados'>
       <p>Nome: ${pegarValorDoNome}</p>
      <p>Fone: ${pegarvalorDoNumero}</p>
      
      </div>
      <div class='nossonumeros'>
      <h3>Numeros que entraremos em contato com você</h3>
       <p>Fone :  91984572107</p>
       <p>Fone :  91984572107</p>
      </div>
        </div>
      
     
    `
    }


}
document.getElementById('numero').addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode
    const enter = key === 13
    if (enter) {
        invocacao()
    }
})


// input.addEventListener('click', (e) => {
//     clicar.style.display = 'block'

// });













// document.getElementById('input').addEventListener('keyup', (e) => {
//     const userName = e.target.value
//     const key = e.which || e.keyCode
//     const enter = key === 13
//     if (enter) {
//     }
// })








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



// const imagem1 = document.querySelector('.imagem');

// imagem1.addEventListener('mouseover', () => {
//     imagem1.style.transform = 'scale(1.5)';
// });

// imagem1.addEventListener('mouseout', () => {
//     imagem1.style.transform = 'scale(1)';
// });
