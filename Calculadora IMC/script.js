// Capturar evento de form
const form = document.querySelector('#form');

// Ouvindo o que passa no formulario
form.addEventListener('submit', function(evento) {
  // Previnindo o formulario de ser enviado e capturando os dados dele
  evento.preventDefault();

 // Capturando os dados dos input inteiro
 const inputPeso = evento.target.querySelector('#peso');
 const inputAltura = evento.target.querySelector('#altura');

 // Tentando converter para números, se caso retornar um NaM
 const peso = Number(inputPeso.value);
 const altura = Number(inputAltura.value);

 // Se o peso for falso, execute.
 if(!peso){
  setResultado('Peso inválido', false);
  return; // parando o código para não passar daqui
 }

 // Se o peso for a falso, execute.
 if(!altura){
  setResultado('Altura inválida', false);
  return; // parando o código para não passar daqui
 }

 // Essa função calcula o IMC
 const imc = getImc(peso, altura);
 const nivelImc = getNivelImc(imc);

 const msg = `Seu IMC é ${imc} <br/> (${nivelImc}).`;

 setResultado(msg, true);

 console.log(imc, nivelImc);
 // Continundo o código...

});

/*
Menos do que 18,5        Abaixo do peso
Entre 18,5 e 24,9        Peso normal
Entre 25 e 29,9          Sobrepeso
Entre 30 e 34,9          Obesidade grau 1
Entre 35 e 39,9          Obesidade grau 2
Mais do que 40           Obesidade grau 3
*/ 

// Pegando o IMC para saber o nível do IMC da pessoa
function getNivelImc (imc){
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if(imc >= 39.9) return nivel[5];
  if(imc >= 34.9) return nivel[4];
  if(imc >= 29.9) return nivel[3];
  if(imc >= 24.9) return nivel[2];
  if(imc >= 18.5) return nivel[1];
  if(imc < 18.5) return nivel[0];


}

// Pegando o IMC, peso e altura e calculando
function getImc(peso, altura){
  // Peso divido por altura elevado a 2
  // ** = elevado a
  const imc = peso / altura ** 2;
  // toFixed = adiciona 2 casas decimais
  return imc.toFixed(2);

}



// Criando um elemento
function criarParagrafo(){
  // Criando um elemento "paragrafo"
  const paragrafo = document.createElement('p');
  return paragrafo;
  
}

// Setando o resultado
function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado');
  // Zerando o resultado
  resultado.innerHTML = '';

  const paragrafo = criarParagrafo();
  
  if(isValid){
    paragrafo.classList.add('paragrafo-resultado');
  }else{
    paragrafo.classList.add('paragrafo-incorreto');
  }

  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}