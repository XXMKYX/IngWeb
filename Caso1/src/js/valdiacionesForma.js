function cambiarForma(input) {
    var valor = input.value;
    console.log(valor);
    if(valor == 1)
    {
        var forma = document.getElementById("formaM");
        var forma2 = document.getElementById("formaD");
        forma.style.display = "block";
        forma2.style.display = "none";
    }
    else if(valor == 2){
        var forma = document.getElementById("formaM");
        var forma2 = document.getElementById("formaD");
        forma.style.display = "none";
        forma2.style.display = "block";
    }
    else{
        var forma = document.getElementById("formaM");
        var forma2 = document.getElementById("formaD");
        forma.style.display = "none";
        forma2.style.display = "none";
    }
}

function validateForm(input){
    
}