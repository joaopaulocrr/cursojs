function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let txt = document.querySelector('div.res')
    let input =document.getElementById('contar')
    
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO] Todos os campos devem ser preenchidos!')
        txt.innerHTML = 'Impossível contar!'
    } else {
        txt.innerHTML = "Contando: <br>"

        let inicioN = Number(inicio.value)
        let fimN = Number(fim.value)
        let passoN = Number(passo.value)
        if (passoN <= 0) {
            alert('Passo não pode ser zero. Considerando passo 1!')
            passoN = 1
        }
            if(inicioN < fimN){
                for (var cont = inicioN; cont <= fimN; cont = cont + passoN) {
                    txt.innerHTML += `\u{1F449} ${cont}`
                }
                txt.innerHTML += `\u{1F3C1}`
            }else{
                txt.innerHTML += `\u{1F3C1}`
                for(var cont = inicioN; cont >= fimN; cont -= passoN){
                    txt.innerHTML += `\u{1F448} ${cont}`
                }
                
            }
            

        
    }

}


