function exibe(){

    //coleta cada input e salva num objeto dentro de pessoas_coletadas
    var pessoas_coletadas = {
        pessoa1: {
            altura: document.getElementById('altura1').value,
            sexo: document.getElementById('sexo1').value
        },
        pessoa2: {
            altura: document.getElementById('altura2').value,
            sexo: document.getElementById('sexo2').value
        },
        pessoa3: {
            altura: document.getElementById('altura3').value,
            sexo: document.getElementById('sexo3').value
        },
        pessoa4: {
            altura: document.getElementById('altura4').value,
            sexo: document.getElementById('sexo4').value
        },
        pessoa5: {
            altura: document.getElementById('altura5').value,
            sexo: document.getElementById('sexo5').value
        }
    }

    //guarda todas as alturas em um array e todos os sexos em um array
    var arrayAlturas = [pessoas_coletadas.pessoa1.altura, pessoas_coletadas.pessoa2.altura, pessoas_coletadas.pessoa3.altura, pessoas_coletadas.pessoa4.altura, pessoas_coletadas.pessoa5.altura];
    var arraySexos = [pessoas_coletadas.pessoa1.sexo, pessoas_coletadas.pessoa2.sexo, pessoas_coletadas.pessoa3.sexo, pessoas_coletadas.pessoa4.sexo, pessoas_coletadas.pessoa5.sexo];
    //alert('Alturas = ' + arrayAlturas + "\n" + 'Sexos: ' + arraySexos);

    //salva a maior altura dentre todas
    var maiorAltura = Math.max.apply(null, arrayAlturas);
    alert('Maior altura encontrada é igual a: ' + maiorAltura + 'm');

    if(maiorAltura == pessoas_coletadas.pessoa1.altura){
        alert('Maior altura é da pessoa 1 e o seu sexo é ' + pessoas_coletadas.pessoa1.sexo);
    }
    else if(maiorAltura == pessoas_coletadas.pessoa2.altura){
        alert('Maior altura é da pessoa 2 e o seu sexo é ' + pessoas_coletadas.pessoa2.sexo);
    }
    else if(maiorAltura == pessoas_coletadas.pessoa3.altura){
        alert('Maior altura é da pessoa 3 e o seu sexo é ' + pessoas_coletadas.pessoa3.sexo);
    }
    else if(maiorAltura == pessoas_coletadas.pessoa4.altura){
        alert('Maior altura é da pessoa 4 e o seu sexo é ' + pessoas_coletadas.pessoa4.sexo);
    }
    else if(maiorAltura == pessoas_coletadas.pessoa5.altura){
        alert('Maior altura é da pessoa 5 e o seu sexo é ' + pessoas_coletadas.pessoa5.sexo);
    }
    else{
        alert('Não consegui ver de quem são as alturas...');
    }

    //faz a contagem dos sexos para ver quantos homens e mulheres tem e qual tem mais
    var contM = 0, contF = 0;
    for(var i=0; i<arraySexos.length; i++){
        if(arraySexos[i] == 'M' || arraySexos[i] == 'm'){
            contM++;
        }
        else if(arraySexos[i] == 'F' || arraySexos[i] == 'f'){
            contF++;
        }
    
    }
    var resultadoContagem = (contM > contF) ? alert('Tem mais homens do que mulheres -  M[' + contM + ']') : alert('Tem mais mulheres do que homens: F[' + contF + ']');

    alert('FIM DO EXERCÍCIO 5');
    
}
