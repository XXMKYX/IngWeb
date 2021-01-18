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

function visualizarM(input){
    var misolicitud = document.getElementById('vista-mi-solicitud-coordinador-maestria');
    var prevmisolicitud = document.getElementById('prev-solicitud-coordinador-maestria');
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
    /* Inputs de información personal */
    var InputAMaterno = document.getElementById("InputNombre");
    var InputAMaterno = document.getElementById("InputAMaterno");
    var InputAPaterno = document.getElementById("InputAPaterno");
    var InputFechaNacimiento = document.getElementById("InputFechaNacimiento");
    var InputLugarDeNacimiento = document.getElementById("InputLugarDeNacimiento");
    var InputNacionalidad = document.getElementById("InputNacionalidad");
    var InputEstadoCivil = document.getElementById("InputEstadoCivil");
    var InputCURP = document.getElementById("InputCURP");
    var InputDependencias = document.getElementById("InputDependencias");

    /* Inputs de información de contacto */
    var InputTelefono = document.getElementById("InputTelefono");
    var InputCorreo = document.getElementById("InputCorreo");
    var InputSkype = document.getElementById("InputSkype");
    var InputFB = document.getElementById("InputFB");

    /* Inputs de información de dirección */
    var InputCalle = document.getElementById("InputCalle");
    var InputNoExt = document.getElementById("InputNoExt");
    var InputNoInt = document.getElementById("InputNoInt");
    var InputColonia = document.getElementById("InputColonia");
    var InputCiudad = document.getElementById("InputCiudad");
    var InputEstado = document.getElementById("InputEstado");
    var InputEstado = document.getElementById("InputCP");
    //alert("Datos guardados con exito!");

    /*
        else{
        
        }

        {
        
        }
    */
    
    
    if(InputNombre.value == '' || InputAMaterno.value == '' || InputAPaterno.value == '' || 
        InputFechaNacimiento.value == ''|| InputLugarDeNacimiento.value == ''
        || InputNacionalidad.value == '' || InputEstadoCivil.value == '' || InputCURP.value == '' || 
        InputDependencias.value == '' || InputTelefono.value == '' || InputCorreo.value == '' || 
        InputSkype.value == '' || InputFB.value == '' || InputCalle.value == '' || InputNoExt.value == ''
        || InputColonia.value == '' || InputCiudad.value == '' || InputEstado.value == '' || InputCP.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
        }
        else{
            if(InputNombre.length >= 100 || InputAMaterno.length >= 100 || InputAPaterno.length >= 100 ||
                InputFechaNacimiento.length >= 100 || InputLugarDeNacimiento.length >= 100 || InputNacionalidad.length >= 100 ||
                InputEstadoCivil.length >= 100 || InputCURP.length >= 100 || InputDependencias.length >= 100 ||
                InputTelefono.length >= 100 || InputCorreo.length >= 100 || InputSkype.length >= 100 ||
                InputFB.length >= 100 || InputCalle.length >= 100 || InputNoExt.length >= 100 ||
                InputNoInt.length >= 100 || InputColonia.length >= 100 || InputCiudad.length >= 100 ||
                InputEstado.length >= 100 || InputCP.length >= 100) //Si el input es muy largo
            {
                alert("Los campos no puede tener más de 100 caracteres");
            }
            else{
                let aux = InputFechaNacimiento.value;
                let dobs = aux.split("-");
                let dob = new Date(dobs[0], dobs[1], dobs[2]);

                var diff_ms = Date.now() - dob.getTime();
                var age_dt = new Date(diff_ms); 
                let edad = Math.abs(age_dt.getUTCFullYear() - 1970);
                if(edad < 18){
                    alert("El aspirante debe ser mayor de edad");
                }
                else{
                    
                }
            }
        }
      
}
