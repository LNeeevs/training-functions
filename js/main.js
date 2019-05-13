var coletaNome, coletaIdade = ""; 

var pessoas = {
    pessoa: {
        nome: "Lucas",
        idade: "28",
        localidade: "Cruzeiro - SP",
        email: "email@email.com"
    },
    pessoa: {
        nome: "José",
        idade: "45",
        localidade: "Manaus - AM",
        email: "email@email.com"
    },
    pessoa: {
        nome: "Marcos",
        idade: "31",
        localidade: "Babuê - MT",
        email: "email@email.com"
    }
}

/*FUNÇÃO QUE IRÁ VERIFICAR SE O CONTEÚDO DO INPUT É IGUAL A UM DOS NOMES NA BASE*/
function encontre(){
    var nomecoletado = "Lucas";

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
}

/*FUNÇÃO QUE COLETA OS DADOS DOS INPUTS E ATUALIZA NO TEXTAREA*/
function consultaNome(){
    coletaNome = document.getElementById("nome-pessoa").value;
    coletaIdade = document.getElementById("idade-pessoa").value;

    /*document.getElementById("resultadoPesquisa").innerHTML = coletaNome + coletaIdade;*/

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

/*FUNÇÃO QUE LIMPA O TEXTAREA*/
function deletaPessoa(){
    document.getElementById("resultadoPesquisa").innerHTML = "";
}