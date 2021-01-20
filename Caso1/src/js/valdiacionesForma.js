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

var HideTab = function(input) {
    var MaestriaDatosPM = document.getElementById('nav-datos');
    var MaestriaDatosAM = document.getElementById('nav-informacion');

    var DoctoradoDatosPD = document.getElementById('nav-datosD');
    var DoctoradoDatosAD = document.getElementById('nav-informacionD');
   // var archivosMaestria = document.getElementById('archivosMaestria');
    //var archivosDoctorado = document.getElementById('archivosDoctorado');
    //var Forma = document.getElementById('formaM');
    var valor = input.value;
    
    //1 si es Maestría, 2 si es Doctorado
    if(valor == 1){
        MaestriaDatosPM.style.display = "block";        
        MaestriaDatosAM.style.display = "none";
    }else if(valor == 2){
        MaestriaDatosPM.style.display = "none";
        MaestriaDatosAM.style.display = "block";        
    }
    else{
        if(valor == 3){
            DoctoradoDatosPD.style.display = "block";        
            DoctoradoDatosAD.style.display = "none";
        }
        else if(valor == 4){
            DoctoradoDatosPD.style.display = "none";
            DoctoradoDatosAD.style.display = "block";        
        }
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

function visualizarD(input){
    var misolicitud = document.getElementById('vista-mi-solicitud-coordinador-doctorado');
    var prevmisolicitud = document.getElementById('prev-solicitud-coordinador-doctorado');
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

    var InputNombre = document.getElementById("InputNombreM");
    var InputAMaterno = document.getElementById("InputAMaternoM");
    var InputAPaterno = document.getElementById("InputAPaternoM");
    var InputFechaNacimiento = document.getElementById("InputFechaNacimientoM");
    var InputLugarDeNacimiento = document.getElementById("InputLugarDeNacimientoM");
    var InputNacionalidad = document.getElementById("InputNacionalidadM");
    var InputEstadoCivil = document.getElementById("InputEstadoCivilM");
    var InputCURP = document.getElementById("InputCURPM");
    var InputDependencias = document.getElementById("InputDependenciasM");

    /* Inputs de información de contacto */
    var InputTelefono = document.getElementById("InputTelefonoM");
    var InputCorreo = document.getElementById("InputCorreoM");
    var InputSkype = document.getElementById("InputSkypeM");
    var InputFB = document.getElementById("InputFBM");

    /* Inputs de información de dirección */
    var InputCalle = document.getElementById("InputCalleM");
    var InputNoExt = document.getElementById("InputNoExtM");
    var InputNoInt = document.getElementById("InputNoIntM");
    var InputColonia = document.getElementById("InputColoniaM");
    var InputCiudad = document.getElementById("InputCiudadM");
    var InputEstado = document.getElementById("InputEstadoM");
    var InputCP = document.getElementById("InputCPM");
    
    /* Inputs de información personal */
    var InputInstitucionM = document.getElementById("InputInstitucionM");
    var pInputinstitucionM = document.getElementById("pInputInstitucionM");
    var InputrsitituladoM = document.getElementById("InputrsitituladoM");
    var InputnrotituladoM = document.getElementById("InputnrotituladoM");
    var InputcarreraM = document.getElementById("InputcarreraM");
    var InputxpPM = document.getElementById("InputxpPM");
    var InputxpDM = document.getElementById("InputxpDM");
    var InputrsipropM = document.getElementById("InputrsipropM");
    var InputrnopropM = document.getElementById("InputrnopropM");
    var InputaniospropM = document.getElementById("InputaniospropM");
    var InputmotivoM = document.getElementById("InputmotivoM");
    var Inputarchivosubido1M = document.getElementById("Inputarchivosubido1M");
    let siTitulado=0;
    let siProp=0;

    /* Validación CURP */
    var res = document.getElementById("resultadoM");

    /* Se valida completamente */
    if(input.value == 'Enviar')
    {
        
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
            if(InputNombre.value.length >= 100 || InputAMaterno.value.length >= 100 || InputAPaterno.value.length >= 100 ||
                InputFechaNacimiento.value.length >= 100 || InputLugarDeNacimiento.value.length >= 100 || InputNacionalidad.value.length >= 100 ||
                InputEstadoCivil.value.length >= 100 || InputCURP.value.length >= 100 || InputDependencias.value.length >= 100 ||
                InputTelefono.value.length >= 100 || InputCorreo.value.length >= 100 || InputSkype.value.length >= 100 ||
                InputFB.value.length >= 100 || InputCalle.value.length >= 100 || InputNoExt.value.length >= 100 ||
                InputNoInt.value.length >= 100 || InputColonia.value.length >= 100 || InputCiudad.value.length >= 100 ||
                InputEstado.value.length >= 100 || InputCP.value.length >= 100) //Si el input es muy largo
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

                    //Se hace submit de forma
                    //document.getElementById("formaP").submit();
                    if(InputInstitucionM.value == '' || pInputinstitucionM.value == ''  || InputcarreraM.value == ''|| 
                        InputxpPM.value == '' || InputxpDM.value == '' || 
                        InputaniospropM.value == '' || InputmotivoM.value == ''|| 
                        Inputarchivosubido1M.value == '' ) //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                    }
                    else
                    {   
                        
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                        if(!InputrsitituladoM.checked ) 
                        {
                            if(!InputnrotituladoM.checked ) 
                            {
                                siTitulado =1;//alert("Favor de indicar si estás titualdo");
                                
                            }
                            
                        }
                        if(siTitulado==1)
                        {
                            alert("Favor de indicar si estás Titulado"); 
                        }
                            
                        else
                        {
                            
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                            if(!InputrsipropM.checked ) 
                            {
                                if(!InputrnopropM.checked ) 
                                {
                                    siProp =1;//alert("Favor de indicar si estás titualdo");
                                    
                                }
                                
                            }
                            if(siProp==1)
                            {
                                alert("Favor de indicar si ya hiciste Propedéutico.");   
                            }
                            else
                            {
                                if(InputInstitucionM.value.length >= 100 || pInputInstitucionM.value.length >= 100 
                                    ||InputcarreraM.value.length >= 100 ||InputxpPM.value.length >= 500 ||
                                    InputxpDM.value.length >= 500 ||InputaniospropM.value.length >= 100 ||
                                    InputmotivoM.value.length >= 500  ) //Si el input es muy largo
                                {
                                    alert("Los campos no puede tener más de 100 caracteres");
                                }
                                else
                                {                   
                                    
                                    const fi = Inputarchivosubido1M; 
                                    // Check if any file is selected. 
                                    if (fi.files.length > 0) 
                                    { 
                                        for (let i = 0; i <= fi.files.length - 1; i++) 
                                        {                   
                                             const fsize = fi.files.item(i).size; 
                                             const file = Math.round((fsize / 1024)); 
                                             // The size of the file. 
                                             if (file >= 1024)
                                            { 
                                                alert("Archivo muy grande"); 
                                             }
                                            else
                                            {                                
                                                document.getElementById("formaMaster").submit();
                                                alert("Datos guardados con exito!");
                                            }
                                        }
                                        
                                    }
                                    
                                }
                            }
                        }   
                    
                    }
                }
            }
        }

    

    }
    else{    
        if(InputCURP.value == "" || res.value == "CURP, Formato: No válido"){
            alert("Para guardar, favor de colocar un CURP válido");
        }
        else{
            document.getElementById("formaMaster").submit();
            alert("Datos guardados con exito!");
        }

    }
    
    
    
    
}

function validarFormaDoctorado(input)
{

    var InputNombreD = document.getElementById("InputNombreD");
    var InputAMaternoD = document.getElementById("InputAMaternoD");
    var InputAPaternoD = document.getElementById("InputAPaternoD");
    var InputFechaNacimientoD = document.getElementById("InputFechaNacimientoD");
    var InputLugarDeNacimientoD = document.getElementById("InputLugarDeNacimientoD");
    var InputNacionalidadD = document.getElementById("InputNacionalidadD");
    var InputEstadoCivilD = document.getElementById("InputEstadoCivilD");
    var InputCURPD = document.getElementById("InputCURPD");
    var InputDependenciasD = document.getElementById("InputDependenciasD");

    /* Inputs de información de contacto */
    var InputTelefonoD = document.getElementById("InputTelefonoD");
    var InputCorreoD = document.getElementById("InputCorreoD");
    var InputSkypeD = document.getElementById("InputSkypeD");
    var InputFBD = document.getElementById("InputFBD");

    /* Inputs de información de dirección */
    var InputCalleD = document.getElementById("InputCalleD");
    var InputNoExtD = document.getElementById("InputNoExtD");
    var InputNoIntD = document.getElementById("InputNoIntD");
    var InputColoniaD = document.getElementById("InputColoniaD");
    var InputCiudadD = document.getElementById("InputCiudadD");
    var InputEstadoD = document.getElementById("InputEstadoD");
    var InputCPD = document.getElementById("InputCPD");
    
    /* Inputs de información personal */
    var InputInstitucionD = document.getElementById("InputInstitucionD");
    var InputpinstitucionD = document.getElementById("InputpinstitucionD");
    var InputInstitucionPosgradoD = document.getElementById("InputInstitucionPosgradoD");
    var InputpInstitucionPosgradoD = document.getElementById("InputpInstitucionPosgradoD");
    var InputrsitituladoD = document.getElementById("InputrsitituladoD");
    var InputrnotituladoD = document.getElementById("InputrnotituladoD");
    var InputxpPD = document.getElementById("InputxpPD");
    var InputxpDD = document.getElementById("InputxpDD");
    var InputrsipropD = document.getElementById("InputrsipropD");
    var InputrnopropD = document.getElementById("InputrnopropD");
    var InputaniospropD = document.getElementById("InputaniospropD");
    var InputmotivoD = document.getElementById("InputmotivoD");
    var Inputarchivosubido1D = document.getElementById("Inputarchivosubido1D");
    var Inputarchivosubido2D = document.getElementById("Inputarchivosubido2D");
    let siTituladoD=0;
    let siPropD=0;

    /* Validación CURP */
    var res = document.getElementById("resultadoD");

    /* Se valida completamente */
    if(input.value == 'Enviar')
    {
        if(InputNombreD.value == '' || InputAMaternoD.value == '' || InputAPaternoD.value == '' || 
        InputFechaNacimientoD.value == ''|| InputLugarDeNacimientoD.value == ''
        || InputNacionalidadD.value == '' || InputEstadoCivilD.value == '' || InputCURPD.value == '' || 
        InputDependenciasD.value == '' || InputTelefonoD.value == '' || InputCorreoD.value == '' || 
        InputSkypeD.value == '' || InputFBD.value == '' || InputCalleD.value == '' || InputNoExtD.value == ''||InputNoIntD.value==''
        || InputColoniaD.value == '' || InputCiudadD.value == '' || InputEstadoD.value == '' || InputCPD.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
        }
        else{
            if(InputNombreD.value.length >= 100 || InputAMaternoD.value.length >= 100 || InputAPaternoD.value.length >= 100 ||
                InputFechaNacimientoD.value.length >= 100 || InputLugarDeNacimientoD.value.length >= 100 || InputNacionalidadD.value.length >= 100 ||
                InputEstadoCivilD.value.length >= 100 || InputCURPD.value.length >= 100 || InputDependenciasD.value.length >= 100 ||
                InputTelefonoD.value.length >= 100 || InputCorreoD.value.length >= 100 || InputSkypeD.value.length >= 100 ||
                InputFBD.value.length >= 100 || InputCalleD.value.length >= 100 || InputNoExtD.value.length >= 100 ||
                InputNoIntD.value.length >= 100 || InputColoniaD.value.length >= 100 || InputCiudadD.value.length >= 100 ||
                InputEstadoD.value.length >= 100 || InputCPD.value.length >= 100) //Si el input es muy largo
            {
                alert("Los campos no puede tener más de 100 caracteres");
            }
            else{
                let aux = InputFechaNacimientoD.value;
                let dobs = aux.split("-");
                let dob = new Date(dobs[0], dobs[1], dobs[2]);

                var diff_ms = Date.now() - dob.getTime();
                var age_dt = new Date(diff_ms); 
                let edad = Math.abs(age_dt.getUTCFullYear() - 1970);
                if(edad < 18){
                    alert("El aspirante debe ser mayor de edad");
                }
                else{

                    //Se hace submit de forma
                    //document.getElementById("formaP").submit();
                    if(InputInstitucionD.value == '' || InputpinstitucionD.value == ''|| InputInstitucionPosgradoD.value == ''
                    || InputpInstitucionPosgradoD.value == ''  ||  
                        InputxpPD.value == '' || InputxpDD.value == '' || 
                        InputaniospropD.value == '' || InputmotivoD.value == ''|| 
                        Inputarchivosubido1D.value == ''|| Inputarchivosubido2D.value == '' ) //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                    }
                    else
                    {   
                        
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                        if(!InputrsitituladoD.checked ) 
                        {
                            if(!InputrnotituladoD.checked ) 
                            {
                                siTituladoD =1;//alert("Favor de indicar si estás titualdo");
                                
                            }
                            
                        }
                        if(siTituladoD==1)
                        {
                            alert("Favor de indicar si estás Titulado"); 
                        }
                            
                        else
                        {
                            
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                            if(!InputrsipropD.checked ) 
                            {
                                if(!InputrnopropD.checked ) 
                                {
                                    siPropD =1;//alert("Favor de indicar si ya hiciste propedeutico");
                                    
                                }
                                
                            }
                            if(siPropD==1)
                            {
                                alert("Favor de indicar si ya hiciste Propedéutico.");   
                            }
                            else
                            {
                                (InputInstitucionD.value == '' || InputpinstitucionD.value == ''|| InputInstitucionPosgradoD.value == ''
                    || InputpInstitucionPosgradoD.value == ''  ||  
                        InputxpPD.value == '' || InputxpDD.value == '' || 
                        InputaniospropD.value == '' || InputmotivoD.value == ''|| 
                        Inputarchivosubido1D.value == ''|| Inputarchivosubido2D.value == '' ) 

                                if(InputInstitucionD.value.length >= 100 || InputpinstitucionD.value.length >= 100 
                                    ||InputInstitucionPosgradoD.value.length >= 100 ||InputpInstitucionPosgradoD.value.length >= 100 
                                    ||InputxpPD.value.length >= 500 || InputxpDD.value.length >= 500 ||
                                    InputaniospropD.value.length >= 100 ||
                                    InputmotivoD.value.length >= 500  ) //Si el input es muy largo
                                {
                                    alert("Los campos no puede tener más de 100 caracteres");
                                }
                                else
                                {                   
                                    
                                    const fi = Inputarchivosubido1D; 
                                    // Check if any file is selected. 
                                    if (fi.files.length > 0) 
                                    { 
                                        for (let i = 0; i <= fi.files.length - 1; i++) 
                                        {                   
                                             const fsize = fi.files.item(i).size; 
                                             const file = Math.round((fsize / 1024)); 
                                             // The size of the file. 
                                             if (file >= 1024)
                                            { 
                                                alert("Archivo muy grande"); 
                                             }
                                            else
                                            {                                
                                                //document.getElementById("formaM").submit();
                                                alert("Datos guardados con exito!");
                                            }
                                        }
                                        
                                    }
                            const fi2 = Inputarchivosubido2D; 
                                    // Check if any file is selected. 
                                    if (fi.files.length > 0) 
                                    { 
                                        for (let i = 0; i <= fi.files.length - 1; i++) 
                                        {                   
                                             const fsize = fi.files.item(i).size; 
                                             const file = Math.round((fsize / 1024)); 
                                             // The size of the file. 
                                             if (file >= 1024)
                                            { 
                                                alert("Archivo muy grande"); 
                                             }
                                            else
                                            {                                
                                                document.getElementById("formaDoc").submit();
                                                alert("Datos guardados con exito!");
                                            }
                                        }
                                        
                                    }
                                    
                                }
                            }
                        }   
                    
                    }
                }
            }
        }

    

    }
    else{    
        if(InputCURPD.value == "" || res.value == "CURP, Formato: No válido"){
            alert("Para guardar, favor de colocar un CURP válido");
        }
        else{
            document.getElementById("formaDoc").submit();
            alert("Datos guardados con exito!");
        }

    }
    
    
    
    
}

       /*

function validarFormaDoctorado(input)
{
    var res = document.getElementById("resultadoD");
    var InputCURP = document.getElementById("InputCURPD");

    if(input.value == "Guardar"){
        if(InputCURP.value == "" || res.value == "CURP, Formato: No válido"){
            alert("Para guardar, favor de colocar un CURP válido");
        }
        else{
            document.getElementById("formaM").submit();
            alert("Datos guardados con exito!");
        }
    }
    else{
        //Aquí van las validaciones completas 
    }
    */
    /*
    const fi = document.getElementById('archivosubido1D'); 
    const f2 = document.getElementById('archivosubido2D'); 

    if (fi.files.length > 0) 
    { 
        for (var i = 0; i <= fi.files.length - 1; i++) 
        { 
  
            const fsize = fi.files.item(i).size; 
            const file = Math.round((fsize / 1024)); 
            // The size of the file. 
            if (file >= 1024)
            { 
                alert("Archivo de CV muy grande"); 
            }
            else
            {
                if (f2.files.length > 0) 
                { 
                    for (var j = 0; j <= f2.files.length - 1; j++) 
                    { 
              
                        const fsize2 = f2.files.item(j).size; 
                        const file2 = Math.round((fsize2 / 1024)); 
                        // The size of the file. 
                        if (file2 >= 1024)
                        { 
                            alert("Archivo de muestra muy grande"); 
                        }
                        else
                        {
                            document.getElementById("formaD").submit();
                        }
                            
                    }
                } 
                //alert("Datos guardados con exito!");
            } 
                /*
                else if (file < 2048) { 
                                    alert( 
                                      "File too small, please select a file greater than 2mb"); 
                                } else { 
                                    document.getElementById('size').innerHTML = '<b>'
                                    + file + '</b> KB'; 
                                } 
                
        }
    
    }
}*/



        
           








