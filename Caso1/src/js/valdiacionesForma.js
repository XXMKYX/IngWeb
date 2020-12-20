var handler = function(input) {
    var formaMaestria = document.getElementById('formaMaestria');
    var formaDoctorado = document.getElementById('formaDoctorado');
    var archivosMaestria = document.getElementById('archivosMaestria');
    var archivosDoctorado = document.getElementById('archivosDoctorado');
    var Forma = document.getElementById('formaM');
    var valor = input.value;
    //1 si es Maestría, 2 si es Doctorado
    if(valor == 1){
        formaMaestria.style.display = "block";
        archivosMaestria.style.display = "block";
        formaDoctorado.style.display = "none";
        archivosDoctorado.style.display = "none";
        Forma.action = "../master_data";
        alert('Se cambió el tipo de formulario');
    }else if(valor == 2){
        formaMaestria.style.display = "none";
        archivosMaestria.style.display = "none";
        formaDoctorado.style.display = "block";        
        archivosDoctorado.style.display = "grid";
        Forma.action = "../doc_data";
    }
    else{
        formaMaestria.style.display = "none";
        archivosMaestria.style.display = "none";
        formaDoctorado.style.display = "none";
        archivosDoctorado.style.display = "none";
        Forma.action = "../nothing_data";
    }
};

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
    var forma3 = document.getElementById("formaM");
    if(Tabame == 'tabDatosAcademicos'){
        
        forma3.style.display = "block";
    }
    else{
        forma3.style.display = "none";
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

  
function agregrarCampos(input) {
    var valor = input.value;
    alert(value);
}

function validateForm(input){
    
}