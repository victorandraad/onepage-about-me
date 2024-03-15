const classes = [".cards", ".selectCards", ".woontt", ".regulargame", ".registrodecompra"]

document.querySelector("#vercel").addEventListener("click", function(){
    window.open("https://precificacao-vbucks.vercel.app/", "_blank")
})

document.querySelector("#regulargame").addEventListener("click", function(){
    window.open("https://github.com/BocchiProgram/Balloop-Project", "_blank")
})

document.querySelector("#woontt").addEventListener("click", function(){
    window.open("https://github.com/andradavic/auto-acc-lol/", "_blank")
})

document.querySelector(".woonttBtn").addEventListener("click", function(){
    for(i in classes){
        if (classes[i] == ".woontt"){
            document.querySelector(classes[i]).style.display = "flex"
            document.querySelector(classes[i]).style.visibility = "visible" 
        } else{
            document.querySelector(classes[i]).style.display = "none"
            document.querySelector(classes[i]).style.visibility = "hidden" 
        }
        
    }
})

document.querySelector(".registrodecompraBtn").addEventListener("click", function(){
    for(i in classes){
        if (classes[i] == ".registrodecompra"){
            document.querySelector(classes[i]).style.display = "flex"
            document.querySelector(classes[i]).style.visibility = "visible" 
        } else{
            document.querySelector(classes[i]).style.display = "none"
            document.querySelector(classes[i]).style.visibility = "hidden" 
        }
        
    }
})

document.querySelector(".regulargameBtn").addEventListener("click", function(){
    for(i in classes){
        if (classes[i] == ".regulargame"){
            document.querySelector(classes[i]).style.display = "flex"
            document.querySelector(classes[i]).style.visibility = "visible" 
        } else{
            document.querySelector(classes[i]).style.display = "none"
            document.querySelector(classes[i]).style.visibility = "hidden" 
        }
        
    }
})

function homepage(){
    for(i in classes){
        if (classes[i] == ".cards"){
            document.querySelector(classes[i]).style.display = "flex"
            document.querySelector(classes[i]).style.visibility = "visible" 
        } else{
            document.querySelector(classes[i]).style.display = "none"
            document.querySelector(classes[i]).style.visibility = "hidden" 
        }
        
    }
}

function anotherProject(){
    for(i in classes){
        if (classes[i] == ".selectCards"){
            document.querySelector(classes[i]).style.display = "flex"
            document.querySelector(classes[i]).style.visibility = "visible" 
        } else{
            document.querySelector(classes[i]).style.display = "none"
            document.querySelector(classes[i]).style.visibility = "hidden" 
        }
        
    }
}

