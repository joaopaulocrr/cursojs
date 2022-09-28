function gerar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    
    if (num.value.length == 0 ){
        alert("[ERRO] Por favor digite um número!")
    }else{
        let numN = Number(num.value)
        tab.innerHTML= ""                           //limpa o select para que receba a nova tabuada
        for(let c = 1;c <= 10;c++){
            let item = document.createElement('option') //cria o elemento option
            let res = numN * c
            item.text = `${numN} x ${c} = ${res}`
            tab.appendChild(item)                      //adiciona o elemento filho(option) ao elemento pai(tab)
        }
      
    }

    

}