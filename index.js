// const pegarInput = document.getElementById('inputs')
// const oqueDigitou = pegarInput.value
// console.log(oqueDigitou)


// const input = document.getElementById('inputs');

// input.addEventListener('input', (e) => {
//   const valorDigitado = e.target.value;
// });





// const form = document.getElementsByClassName('formulario')
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const input = document.getElementById('meu-input');
//   const valorDigitado = input.value;
//   console.log(valorDigitado)
//   // Enviar os dados para o servidor
// });








// const inputs = document.getElementById('meu-input');

// inputs.addEventListener('change', (e) => {
//   const valorDigitado = e.target.value;



//  console.log(valorDigitado)


// });




// const input = document.getElementById('meu-input');
// const botao = document.getElementById('enviar');

// botao.addEventListener('click', (e) => {
//   const valorDigitado = input.value;
//   const numero = '+5591984572107';
// //   const link = `https://wa.me/${559199069633}?text=${encodeURIComponent(valorDigitado)}`;
// //   window.open(link, '_blank');
// });









// function enviar() {
//     const inputs = document.getElementById('meu-input');
//     inputs.addEventListener('change', (e) => {
//         const valorDigitado = e.target.value
//         console.log(valorDigitado)

//         //     // const url = `https://wa.me/${91984572107}?text=${encodeURIComponent(mensagem)}`;
//         //     // window.open(url, '_blank');
//     });

// }

// const botao = document.getElementById('enviar');
// console.log(botao)









const botao = document.getElementById('enviar');

botao.addEventListener('click', (e) => {
    const input = document.getElementById('meu-input')
    const inputNuber = document.getElementById ('meu-input-nuber')
    const mensagem = input.value
    const mensagem2 = inputNuber.value
 
    const numero = '+559199069633'; // número de telefone do destinatário

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem, mensagem2)}`;
      window.open(url, '_blank');
});



// // Salvar o que foi digitado no input
// const input = document.getElementById('meu-input');
// const valorDigitado = input.value;
// localStorage.setItem('meu-dado', valorDigitado);

// // Recuperar o que foi digitado
// const dadoSalvo = localStorage.getItem('meu-dado');
// console.log(dadoSalvo);



// // Salvar o que foi digitado no input
// const input = document.getElementById('meu-input');
// const valorDigitado = input.value;
// document.cookie = `meu-dado=${valorDigitado}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

// // Recuperar o que foi digitado
// const cookie = document.cookie;
// const dadoSalvo = cookie.split('=')[1];
// console.log(dadoSalvo);


// Salvar o que foi digitado no input
// const input = document.getElementById('meu-input');
// const valorDigitado = input.value;
// fetch('index.html?nome=&tel=5591986128843', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ dado: valorDigitado }),
// })
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.error(err));


