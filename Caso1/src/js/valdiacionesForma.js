var handler = function(input) {
    var vformaMaestria = document.getElementById('formaMaestria');
    var vformaDoctorado = document.getElementById('formaDoctorado');
   // var archivosMaestria = document.getElementById('archivosMaestria');
    //var archivosDoctorado = document.getElementById('archivosDoctorado');
    //var Forma = document.getElementById('formaM');
    var valor = input.value;
    
    //1 si es Maestría, 2 si es Doctorado
    if(valor == 1){
        vformaMaestria.style.display = "block";        
        //archivosMaestria.style.display = "block";
        vformaDoctorado.style.display = "none";
        //archivosDoctorado.style.display = "none";
        //Forma.action = "../master_data";
    }else if(valor == 2){
        vformaMaestria.style.display = "none";
        //archivosMaestria.style.display = "none";
        vformaDoctorado.style.display = "block";        
        //archivosDoctorado.style.display = "grid";
        //Forma.action = "../doc_data";
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

if(Tabame == 'tabVerMiSolicitud'){

    var prevmisolicitud = document.getElementById('prev-mi-solicitud');
    prevmisolicitud.style.display = "block";
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
    //var forma3 = document.getElementById("formaM");
    if(Tabame == 'tabDatosAcademicos'){
        
      //  forma3.style.display = "block";
    }
    else{
        //forma3.style.display = "none";
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

function visualizar(input){
    var misolicitud = document.getElementById('vista-mi-solicitud');
    var prevmisolicitud = document.getElementById('prev-mi-solicitud');
    if(input.value == 'Visualizar'){
        misolicitud.style.display = "block";
        prevmisolicitud.style.display = "none";
    }
    else{
        misolicitud.style.display = "none";
        prevmisolicitud.style.display = "block";
    }
}

function validarFormaMaestria(input)
{
    const fi = document.getElementById('archivosubido1M'); 
    // Check if any file is selected. 
    if (fi.files.length > 0) 
    { 
        for (let i = 0; i <= fi.files.length - 1; i++) 
        { 
  
             const fsize = fi.files.item(i).size; 
             const file = Math.round((fsize / 1024)); 
             // The size of the file. 
             if (file >= 1024) { 
                alert("Archivo muy grande"); 
            }
            else{
                document.getElementById("formaM").submit();
                alert("Datos guardados con exito!");
            }
                /*
                else if (file < 2048) { 
                                    alert( 
                                      "File too small, please select a file greater than 2mb"); 
                                } else { 
                                    document.getElementById('size').innerHTML = '<b>'
                                    + file + '</b> KB'; 
                                } 
                */
        }
    } 
}

function validarFormaDoctorado(input)
{
    const fi = document.getElementById('archivosubido1D'); 
    const f2 = document.getElementById('archivosubido2D'); 
    // Check if any file is selected. 
    if (fi.files.length > 0) 
    { 
        for (var i = 0; i <= fi.files.length - 1; i++) 
        { 
  
             const fsize = fi.files.item(i).size; 
             const file = Math.round((fsize / 1024)); 
             // The size of the file. 
             if (file >= 1024) { 
                alert("Archivo de CV muy grande"); 
            }
            else{
                if (f2.files.length > 0) 
                { 
                    for (var j = 0; j <= f2.files.length - 1; j++) 
                    { 
              
                         const fsize2 = f2.files.item(j).size; 
                         const file2 = Math.round((fsize2 / 1024)); 
                         // The size of the file. 
                         if (file2 >= 1024) { 
                            alert("Archivo de muestra muy grande"); 
                        }
                        else{
                            document.getElementById("formaD").submit();
                        }
                            
                    }
                } 
            alert("Datos guardados con exito!");
            }
                /*
                else if (file < 2048) { 
                                    alert( 
                                      "File too small, please select a file greater than 2mb"); 
                                } else { 
                                    document.getElementById('size').innerHTML = '<b>'
                                    + file + '</b> KB'; 
                                } 
                */
        }
    }

    
}


function validarFormaPersonal(input)
{
    
            alert("Datos guardados con exito!");
    
}
