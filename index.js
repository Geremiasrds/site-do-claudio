const opcoesGeral = document.querySelector('.opcoes-geral')
const nome = document.getElementById('nome');
const resultadoVazio = document.getElementById("vazio-input")
const numero = document.getElementById('numero')
const clicar = document.getElementById('enviar')
const dados = localStorage.getItem('meus-dados');
const inputsDeSimulacao = document.querySelectorAll('.simulação')
clicar.addEventListener('click', (e => { invocacao() }))
document.getElementById('numero').addEventListener('keyup', (e) => {
    const key = e.which || e.keyCode
    const enter = key === 13
    if (enter) {
        invocacao()
        const valor = e.target.value;
        localStorage.setItem('meus-dados', valor);
        console.log(valor)
      
    }
})

function invocacao() {
    const pegarValorDoNome = nome.value
    const pegarvalorDoNumero = numero.value
    const sumir = document.querySelector('.formulario')

    if (pegarValorDoNome === '' || pegarvalorDoNumero === '') {v
        nome.style = 
        `
animation: animacao-placeholder 0.5s infinite;
        `
        nome.placeholder = `Por favor digite seu nome!`
        numero.placeholder = `Por favor digite seu numero!`
        numero.style = `
        animation: animacao-placeholder 0.5s infinite;
        `
        resultadoVazio.innerHTML = '<div >Preencha todos os campos!</div>'
        resultadoVazio.style.display = 'block'
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
       <p>📞Fone  :  91984572107 </p>
       <p>📞Fone :  91984572107</p>
      </div>
        </div>
    `
    }
}

function mecher() {
    opcoesGeral.innerHTML = `
    <div class='arealgeraljs'>
    
    <h1>EM MANUTENÇÃO</h1>  <p>Estamos buscando melhor praticidade pra você</p>
    </div>
    `
}
 const meuForDescricao = document.getElementById('texto')
    const meuNumero = document.getElementById('number')
    const meuNome = document.getElementById('nome')
    const meuEnd = document.getElementById('end')
const classVazia = document.querySelector('.mostrar-clicar')
function btnVisita() {   
    console.log(meuForDescricao.value)
    console.log(meuNome)
    console.log(meuNumero)
    console.log(meuEnd)
    meuNumero.value
    meuEnd.value
    meuEnd.values

        const pegar1 = classVazia.childNodes[1]
    pegar1.style.display = 'block'

}
