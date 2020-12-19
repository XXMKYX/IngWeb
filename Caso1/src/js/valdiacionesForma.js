function changeTab(evt, Tabame) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(Tabame).style.display = "block";
evt.currentTarget.className += " active";
}

function changeTab2(evt, Tabame) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    if(Tabame == 'tabDatosAcademicos'){
        var forma3 = document.getElementById("formaM");
        forma3.style.display = "block";
    }
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tabame).style.display = "block";
    evt.currentTarget.className += " active";
    }


    
var radios = document.forms["formaT"].elements["tipoFormaradio"];
    for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        alert(this.value);
    }
}

  
function cambiarForma(input) {
    var valor = input.value;
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