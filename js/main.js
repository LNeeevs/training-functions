/*FUNÇÃO QUE LIMPA O TEXTAREA - 1*/
function deletaPessoa(){
    document.getElementById("resultadoPesquisa").innerHTML = "";
}

/*FUNÇÃO QUE LIMPA O TEXTAREA - 2*/
function deletaCampo(){
    document.getElementById("resultadoPesquisa-2").innerHTML = "";
}

/*FUNÇÃO QUE COLETA OS DADOS DOS INPUTS E ATUALIZA NO TEXTAREA*/
function consultaNome(){
    coletaNome = document.getElementById("nome-pessoa").value;
    coletaIdade = document.getElementById("idade-pessoa").value;

    if(pessoas.pessoa1.nome == coletaNome){
        alert("Você foi encontrado no if1!");
        document.getElementById("resultadoPesquisa").innerHTML = pessoas.pessoa1.nome + '\n' + pessoas.pessoa1.idade + '\n' + pessoas.pessoa1.email + '\n' + pessoas.pessoa1.localidade;
    }
    else if(pessoas.pessoa2.nome == coletaNome){
        alert("Você foi encontrado no if2!");
        document.getElementById("resultadoPesquisa").innerHTML = pessoas.pessoa2.nome + '\n' + pessoas.pessoa2.idade + '\n' + pessoas.pessoa2.email + '\n' + pessoas.pessoa2.localidade;
    }
    else{
        alert("Nada encontrado em nosso banco de dados!");
    }
}

/*BASE DE DADOS*/
var coletaNome, coletaIdade = "";

const pessoas = [{
    nome: "Lucas",
    idade: "28",
    localidade: "Cruzeiro - SP",
    email: "email@email.com"
  },
  {
    nome: "José",
    idade: "45",
    localidade: "Manaus - AM",
    email: "email@email.com"
  },
  {
    nome: "Marcos",
    idade: "31",
    localidade: "Babuê - MT",
    email: "email@email.com"
  },
  {
    nome: "Ana",
    idade: "82",
    localidade: "Blumenau - SC",
    email: "email@email.com"
  }
]

/*FUNÇÃO QUE IRÁ VERIFICAR SE O CONTEÚDO DO INPUT É IGUAL A UM DOS NOMES NA BASE*
function encontre(){

    var nomecoletado = "Lucas";
    alert(nomecoletado);

    let selecao = pessoas.filter(p => p.pessoa.nome.toLowerCase() == nomecoletado.toLowerCase())[0];
    alert(selecao); 

    for(pessoa in pessoas){
        switch(nomecoletado == pessoas.pessoa.nome){
            case "Lucas":
                alert('Eu encontrei este nome: ' + pessoas.pessoa.nome);
                break;
            case "José":
                alert('Eu encontrei este nome: ' + pessoas.pessoa.nome);
                break;
            case "Marcos":
                alert('Eu encontrei este nome: ' + pessoas.pessoa.nome);
                break;
            default:
                alert('Não encontrei nada...');
        }
    }
}*/

/*FUNÇÃO QUE IRÁ VERIFICAR SE O CONTEÚDO DO INPUT É IGUAL A UM DOS NOMES NA BASE*/
function encontre() {
    nomecoletado = document.getElementById("nomedaPessoa").value;

    alert(nomecoletado);

    let found = pessoas.find(pessoa => {
      return (pessoa.nome.toLowerCase()).replace(/\s/g, '') === (nomecoletado.toLowerCase()).replace(/\s/g, ''); // Passar os nomes para minúsculos e remove espaços em branco, isso melhor o match
    })
  
    if (found) {
      alert('Eu encontrei este nome: ' + found.nome);
    } else {
      alert('Não encontrei nada...');
    }
}

/*FUNÇÃO QUE RETORNA UM VALOR*/
function retornaValor(){

    var valor1 = document.getElementById('valor-1');
    var valor2 = document.getElementById('valor-2');

    var somatoria = function() { return valor1+valor2 };

    document.getElementById("resultadoPesquisa-2") = soma(); 
}

/*FUNÇÃO QUE TESTA SEXO*/
var sexo = 'M';
var testaResultado;

function verifSexo(){
    testaResultado = prompt('Qual o seu sexo?');
    testaResultado = (testaResultado === 'M') ? alert("Ok") : alert("Sei de nada...");
}


/*TREINANDO FUNÇÕES MATEMÁTICAS*/
var valorA = 100, valorB = 50;
var i,j;

function usandoFor1(){
    for(i=0; i <= 1000; i++){
        if(i > ((valorA + valorB) / 10)){
            alert(i);
        }
    }
}

var resultadoDoFor;

function usandoFor2(){
    for(i=0; i <= 5; i++){
        for(j=0; j <= 5; j++){
            resultadoDoFor = [i][j];
        }
    }
    alert(resultadoDoFor[0][1]);
}
