console.log("Hello World!")

const btnEncrp = document.querySelector(".butEnc");
const txtEncrp = document.querySelector(".textin");
const advice = document.querySelector(".txtAdvice");
const textout = document.querySelector(".textout");
const card = document.querySelector(".card");
const butCopy = document.querySelector(".butCopy");
const butDes = document.querySelector(".butDes");

// Encriptar

btnEncrp.addEventListener("click", e=>{
    e.preventDefault();
    let text = txtEncrp.value;
    console.log(text)
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(text == ""){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "El campo de texto esta vacio";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else if(text !== txt){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else if(text !== text.toLowerCase()){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "El texto debe ser todo en minuscula";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else{
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/a/mg, "ai");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");
        
        textout.innerHTML = text;
        butCopy.style.visibility = "inherit";
        card.remove();
    }

    console.log(text);

})


// Desencriptar

butDes.addEventListener("click", e=>{
    e.preventDefault();
    let text = txtEncrp.value;
    console.log(text)
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
    
    if(text == ""){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "El campo de texto esta vacio";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else if(text !== txt){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else if(text !== text.toLowerCase()){
        advice.style.background = "#0A3871";
        advice.style.color = "#FFFF";
        advice.style.fontweight = "800";
        advice.textContent = "El texto debe ser todo en minuscula";
        
        setTimeout(()=>{
            aviso.removeAtribute("style");
        }, 1500);
    }

    else{
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ai/mg, "a");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u");
        
        textout.innerHTML = text;
        butCopy.style.visibility = "inherit";
        card.remove();
    }

    console.log(text);

})


//Copy Button

butCopy.addEventListener("click", e=>{
    e.preventDefault();
    let copy = textout;
    copy.select();
    document.execCommand("copy");
});