function clicar(){
    var contador = document.getElementById('contador')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if  (contador.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        var contadorN = Number(contador.value)
        var fimN = Number(fim.value)
        var passoN = Number(passo.value)

        if(passoN <= 0){
            alert('Passo inválido! Considerando PASSO 1!')
            passoN = 1
        }

        if(contadorN < fimN){
             for(var c = contadorN; c <= fimN; c += passoN){
            res.innerHTML += `${c} \u{1F449}`
        }
       
        }else{
            for(var c = contadorN; c >= fimN; c -= passoN){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        

    }

    
   
    

   

}
