var nota_1, nota_2, nota_3, nota_4;
var nt1, nt2, nt3, nt4, soma;

function coletaNotas(){
    nota_1 = document.getElementById('nota1').value;
    nota_2 = document.getElementById('nota2').value;
    nota_3 = document.getElementById('nota3').value;
    nota_4 = document.getElementById('nota4').value;

    calculaMedia(nota_1,nota_2,nota_3,nota_4);
}

function calculaMedia(n1,n2,n3,n4){
    nt1 = parseInt(n1);
    nt2 = parseInt(n2);
    nt3 = parseInt(n3);
    nt4 = parseInt(n4);

    soma = ((nt1+nt2+nt3+nt4)/4);

    alert('Sua média é de : ' + soma);

    if(soma >= 6){
        alert('Você passou!');
    }
    else{
        alert('Sinto muito...');
    }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var num1, num2, num3, num4, num5 = 0;

function coletaNumeros(){
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    num3 = document.getElementById('numero3').value;
    num4 = document.getElementById('numero4').value;
    num5 = document.getElementById('numero5').value;

    alert(
        'Raiz quadrada do numero 1: ' + Math.sqrt(num1) + '\n' + 
        'Raiz quadrada do numero 2: ' + Math.sqrt(num2) + '\n' + 
        'Raiz quadrada do numero 3: ' + Math.sqrt(num3) + '\n' + 
        'Raiz quadrada do numero 2: ' + Math.sqrt(num4) + '\n' + 
        'Raiz quadrada do numero 3: ' + Math.sqrt(num5)
    );
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var numeroColetado = [];
var contadorValor = [];
var contadorValor2 = [];
var i;

function coletaNumeroInserido(){
    //coleta o valor e salva em uma array
    numeroColetado = document.getElementById('numeros-inseridos').value;

    //separa cada valor em um lugar e salva num array
    var resultadoGerado = numeroColetado.split(" ");

    for(i=0;i<resultadoGerado.length;i++){
        contadorValor[i] = resultadoGerado[i];
        contadorValor2[i] = parseInt(contadorValor[i]);
    }

    //função que retira o maior valor de um array
    alert("Resultado gerado: " + Math.max.apply(null, contadorValor2));
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var coletaIdades = [], vColetaIdades = [];
var y;

function coletaIdade(){
    coletaIdades = document.getElementById('idades-inseridas').value;

    //separa as idades por espaço em branco
    var separandoColetaIdades = coletaIdades.split(" ");

    //grava as idades em um array salvas como inteiro
    for(y=0;y<separandoColetaIdades.length;y++){
        vColetaIdades[y] = parseInt(separandoColetaIdades[y]);
    }

    //função que ordena o vetor numerico e, subtraindo A de B, transforma o conteúdo em valor numerico para comparação
    vColetaIdades.sort(function(a, b) {
        return a - b;
    });

    //mostra o resultado
    alert(vColetaIdades);
}

