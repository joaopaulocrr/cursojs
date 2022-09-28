function gerar(){

    let num = document.getElementById("txtn")
    let tabuada = document.getElementById("tabuada")
   
   
    if(num.value.length == 0){
        alert("[ERRO] Por favor digite um número!")
    }else{
        let numN = Number(num.value)
        tabuada.innerHTML = ""
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numN} x ${c} = ${numN*c}`
           tabuada.appendChild(item)
        }
    }
  
    
    
   
    
  
}