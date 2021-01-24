var VarValorSubmit = "";

var handler = function(input) {
    var newformaMaestria = document.getElementById('nuevaformaMaestria');
    var newformaDoctorado = document.getElementById('nuevaformaDoctorado');
   // var archivosMaestria = document.getElementById('archivosMaestria');
    //var archivosDoctorado = document.getElementById('archivosDoctorado');
    //var Forma = document.getElementById('formaM');
    var valor = input.value;
    

    //1 si es Maestría, 2 si es Doctorado
    if(valor == 3){

        newformaMaestria.style.display = "block";        
        newformaDoctorado.style.display = "none";

    }else if(valor == 4){ 

        newformaMaestria.style.display = "none";
        newformaDoctorado.style.display = "block";     
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


var HideTabMiSolicitud = function(input) {
    var MaestriaDatosPM = document.getElementById('navdatosmisolicitudpm');
    var MaestriaDatosAM = document.getElementById('navdatosmisolicitudam');

    var DoctoradoDatosPD = document.getElementById('navdatosmisolicitudpd');
    var DoctoradoDatosAD = document.getElementById('navdatosmisolicitudad');

    
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

function HideTabTipoForma(input){
    valor = input.value;
    var MaestriaDatosPM = document.getElementById('IDFormaCURP');
    var MaestriaDatosAM = document.getElementById('IDTipoFormulario'); 
    //var formaM = document.getElementById('formaMaestria');

    var LlenarFormaPM = document.getElementById('navLlenarFormaPersonalM');
    var LlenarFormaAM = document.getElementById('navLlenarFormaAcademicoM'); 

    var LlenarFormaPD = document.getElementById('navLlenarFormaPersonalD');
    var LlenarFormaAD = document.getElementById('navLlenarFormaAcademicoD'); 

    var NuevaFormaMasterP = document.getElementById('NuevaEntradaMasterP');
    var NuevaFormaMasterA = document.getElementById('NuevaEntradaMasterA'); 

    var NuevaFormaDocP = document.getElementById('NuevaEntradaDocP');
    var NuevaFormaDocA = document.getElementById('NuevaEntradaDocA'); 

    var coordPersonalM = document.getElementById('coordPersonalM');
    var coordAcademicoM = document.getElementById('coordAcademicoM');
    
    var coordPersonalP = document.getElementById('coordPersonalD');
    var coordAcademicoP = document.getElementById('coordAcademicoD'); 


    console.log(valor);

    if(valor == 1){
        MaestriaDatosPM.style.display = "block";        
        MaestriaDatosAM.style.display = "none";
      //  formaM.style.display = "none";
    }else if(valor == 2){
        MaestriaDatosPM.style.display = "none";
        MaestriaDatosAM.style.display = "block";  
        formaM.style.display = "block";
    }
    //Solicitudes de ocultar por parte de la forma de llenar maestría
    else if(valor == 3){
        LlenarFormaPM.style.display = "block";        
        LlenarFormaAM.style.display = "none";
        //formaM.style.display = "none";
    }
    else if(valor == 4){
        LlenarFormaAM.style.display = "block";        
        LlenarFormaPM.style.display = "none";
        //formaM.style.display = "none";
    }
    else if(valor == 5){
        LlenarFormaPD.style.display = "block";        
        LlenarFormaAD.style.display = "none";
        //formaM.style.display = "none";
    }
    else if(valor == 6){
        LlenarFormaAD.style.display = "block";        
        LlenarFormaPD.style.display = "none";
    //    formaM.style.display = "none";
    }
    else if(valor == 7){
        NuevaFormaMasterP.style.display = "block";        
        NuevaFormaMasterA.style.display = "none";
        //formaM.style.display = "none";
    }
    else if(valor == 8){
        NuevaFormaMasterA.style.display = "block";        
        NuevaFormaMasterP.style.display = "none";
        //formaM.style.display = "none";
    }
    else if(valor == 9){
        NuevaFormaDocA.style.display = "none";
        NuevaFormaDocP.style.display = "block";                
    }
    else if(valor == 10){
        NuevaFormaDocP.style.display = "none";        
        NuevaFormaDocA.style.display = "block";
        //formaM.style.display = "none";
    }
    else if(valor == 11){
        coordAcademicoM.style.display = "none";
        coordPersonalM.style.display = "block";                
    }
    else if(valor == 12){
        coordPersonalM.style.display = "none";        
        coordAcademicoM.style.display = "block";
        //formaM.style.display = "none";
    }
    else if(valor == 13){
        coordAcademicoP.style.display = "none";
        coordPersonalP.style.display = "block";                
    }
    else if(valor == 14){
        coordPersonalP.style.display = "none";        
        coordAcademicoP.style.display = "block";
        //formaM.style.display = "none";
    }
}

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
    
    /* Inputs de información académica */
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
    if(VarValorSubmit == 'Enviar')
    {
        
        if(InputNombre.value == '' || InputAMaterno.value == '' || InputAPaterno.value == '' || 
        InputFechaNacimiento.value == ''|| InputLugarDeNacimiento.value == ''
        || InputNacionalidad.value == '' || InputEstadoCivil.value == '' || InputCURP.value == '' || 
        InputDependencias.value == '' || InputTelefono.value == '' || InputCorreo.value == '' || 
        InputSkype.value == '' || InputFB.value == '' || InputCalle.value == '' || InputNoExt.value == ''
        || InputColonia.value == '' || InputCiudad.value == '' || InputEstado.value == '' || InputCP.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
            return false;
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
                return false;
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
                    return false;
                }
                else{

                    if(InputInstitucionM.value == '' || pInputinstitucionM.value == ''  || InputcarreraM.value == ''|| 
                        InputxpPM.value == '' || InputxpDM.value == '' || 
                        InputaniospropM.value == '' || InputmotivoM.value == ''|| 
                        Inputarchivosubido1M.value == '') //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                        return false;
                    }
                    else
                    {   
                        
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                        if(!InputrsitituladoM.checked) 
                        {
                            if(!InputnrotituladoM.checked ) 
                            {
                                siTitulado =1;//alert("Favor de indicar si estás titualdo");
                                
                            }
                            
                        } 

                        if(siTitulado==1)
                        {
                            alert("Favor de indicar si estás Titulado"); 
                            return false;
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
                                return false;  
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
                                            alert("Archivo muy grande, debe ser menor a 1mb");
                                            return false;
                                         }
                                        else
                                        {                                                                            
                                            alert("Datos finalizados con exito! (LlenarForma M) ");
                                            return true;
                                        }
                                    }
                                    
                                }
                                else{
                                    alert("Adjunta tu(s) archivo(s)");
                                    return false;
                                }
                                    
                                
                            }
                        }                                                                                                                   
                    }
                }
            }
        }
    }
    else if(VarValorSubmit == 'Guardar'){    
        if(InputCURP.value == "" || res.value == "CURP, Formato: No válido"){
            alert("Para guardar, favor de colocar un CURP válido");
            return false;
        }
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
                    alert("Archivo muy grande, debe ser menor a 1mb"); 
                    return false;
                 }
                else
                {                                                                    
                    alert("Datos guardados con exito! (LlenarForma M) ");
                    return true;
                }
            }
            
        }
        else{
            alert("Datos guardados con exito! (LlenarForma M) ");
            return true;
        }

    }
    else
    {
        //Va a actualizar
        var selectCoord = document.getElementById("opcionesValidacionM").value;
        var MensajeCoord = document.getElementById("CoordComentarioM").value;
        if(selectCoord == 'Pendiente' || selectCoord == '' || CoordComentarioM == '' || CoordComentarioM == 'Sin comentarios'){
            return false;
        }
        else{
            return true;
        }
    } 
}


function validarNewFormaMaestria(input)
{    
    var InputNombre = document.getElementById("newInputNombreM");
    var InputAMaterno = document.getElementById("newInputAMaternoM");
    var InputAPaterno = document.getElementById("newInputAPaternoM");
    var InputFechaNacimiento = document.getElementById("newInputFechaNacimientoM");
    var InputLugarDeNacimiento = document.getElementById("newInputLugarDeNacimientoM");
    var InputNacionalidad = document.getElementById("newInputNacionalidadM");
    var InputEstadoCivil = document.getElementById("newInputEstadoCivilM");
    var InputCURP = document.getElementById("newInputCURPM");
    var InputDependencias = document.getElementById("newInputDependenciasM");

    /* Inputs de información de contacto */
    var InputTelefono = document.getElementById("newInputTelefonoM");
    var InputCorreo = document.getElementById("newInputCorreoM");
    var InputSkype = document.getElementById("newInputSkypeM");
    var InputFB = document.getElementById("newInputFBM");

    /* Inputs de información de dirección */
    var InputCalle = document.getElementById("newInputCalleM");
    var InputNoExt = document.getElementById("newInputNoExtM");
    var InputNoInt = document.getElementById("newInputNoIntM");
    var InputColonia = document.getElementById("newInputColoniaM");
    var InputCiudad = document.getElementById("newInputCiudadM");
    var InputEstado = document.getElementById("newInputEstadoM");
    var InputCP = document.getElementById("newInputCPM");
    
    /* Inputs de información académica */
    var InputInstitucionM = document.getElementById("newInputInstitucionM");
    var pInputinstitucionM = document.getElementById("newpInputInstitucionM");
    var InputrsitituladoM = document.getElementById("newInputrsitituladoM");
    var InputnrotituladoM = document.getElementById("newInputnrotituladoM");
    var InputcarreraM = document.getElementById("newInputcarreraM");
    var InputxpPM = document.getElementById("newInputxpPM");
    var InputxpDM = document.getElementById("newInputxpDM");
    var InputrsipropM = document.getElementById("newInputrsipropM");
    var InputrnopropM = document.getElementById("newInputrnopropM");
    var InputaniospropM = document.getElementById("newInputaniospropM");
    var InputmotivoM = document.getElementById("newInputmotivoM");
    var Inputarchivosubido1M = document.getElementById("newInputarchivosubido1M");
    let siTitulado=0;
    let siProp=0;

    /* Validación CURP */
    var res = document.getElementById("newresultadoM");
    /* Se valida completamente */
    if(VarValorSubmit == 'Enviar')
    {
        
        if(InputNombre.value == '' || InputAMaterno.value == '' || InputAPaterno.value == '' || 
        InputFechaNacimiento.value == ''|| InputLugarDeNacimiento.value == ''
        || InputNacionalidad.value == '' || InputEstadoCivil.value == '' || InputCURP.value == '' || 
        InputDependencias.value == '' || InputTelefono.value == '' || InputCorreo.value == '' || 
        InputSkype.value == '' || InputFB.value == '' || InputCalle.value == '' || InputNoExt.value == ''
        || InputColonia.value == '' || InputCiudad.value == '' || InputEstado.value == '' || InputCP.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
            return false;
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
                return false;
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
                    return false;
                }
                else{

                    if(InputInstitucionM.value == '' || pInputinstitucionM.value == ''  || InputcarreraM.value == ''|| 
                        InputxpPM.value == '' || InputxpDM.value == '' || 
                        InputaniospropM.value == '' || InputmotivoM.value == ''|| 
                        Inputarchivosubido1M.value == '') //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                        return false;
                    }
                    else
                    {   
                        
                        //Si una de las dos está checked, sale true, el ! hace que pase a la siguiente validación
                        if(!InputrsitituladoM.checked) 
                        {
                            if(!InputnrotituladoM.checked ) 
                            {
                                siTitulado =1;//alert("Favor de indicar si estás titualdo");
                                
                            }
                            
                        } 

                        if(siTitulado==1)
                        {
                            alert("Favor de indicar si estás Titulado"); 
                            return false;
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
                                return false;  
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
                                            alert("Archivo muy grande, debe ser menor a 1mb");
                                            return false;
                                         }
                                        else
                                        {                                
                                            alert("Datos finalizados con exito! (nueva entrada M)");
                                            return true;
                                        }
                                    }
                                    
                                }
                                else{
                                    alert("Adjunta tu(s) archivo(s)");
                                    return false;
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
            return false;
        }
        else{
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
                        alert("Archivo muy grande, debe ser menor a 1mb"); 
                        return false;
                     }
                    else
                    {                                                        
                        alert("Datos guardados con exito! (nueva entrada M)");
                        return true;
                    }
                }
            }
            else{
                
                alert("Datos guardados con exito! (nueva entrada M)");
                return true;
            }
           
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
    var Inputarchivosubido1D = document.getElementById("Inputarchivosubido1D");;
    let siTituladoD=0;
    let siPropD=0;

    /* Validación CURP */
    var res = document.getElementById("resultadoD");

    /* Se valida completamente */
    if(VarValorSubmit == 'Enviar')
    {        
        if(InputNombreD.value == '' || InputAMaternoD.value == '' || InputAPaternoD.value == '' || 
        InputFechaNacimientoD.value == ''|| InputLugarDeNacimientoD.value == ''
        || InputNacionalidadD.value == '' || InputEstadoCivilD.value == '' || InputCURPD.value == '' || 
        InputDependenciasD.value == '' || InputTelefonoD.value == '' || InputCorreoD.value == '' || 
        InputSkypeD.value == '' || InputFBD.value == '' || InputCalleD.value == '' || InputNoExtD.value == ''
        || InputColoniaD.value == '' || InputCiudadD.value == '' || InputEstadoD.value == '' || InputCPD.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
            return false;
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
                return false;
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
                    return false;
                }
                else{

                    //Se hace submit de forma
                    //document.getElementById("formaP").submit();
                    if(InputInstitucionD.value == '' || InputpinstitucionD.value == ''|| InputInstitucionPosgradoD.value == ''
                    || InputpInstitucionPosgradoD.value == ''  ||  
                        InputxpPD.value == '' || InputxpDD.value == '' || 
                        InputaniospropD.value == '' || InputmotivoD.value == ''|| 
                        Inputarchivosubido1D.value == '' ) //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                        return false;
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
                            return false;
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
                                return false;  
                            }
                            else
                            {                            
                                if(InputInstitucionD.value.length >= 100 || InputpinstitucionD.value.length >= 100 
                                    ||InputInstitucionPosgradoD.value.length >= 100 ||InputpInstitucionPosgradoD.value.length >= 100 
                                    ||InputxpPD.value.length >= 500 || InputxpDD.value.length >= 500 ||
                                    InputaniospropD.value.length >= 100 ||
                                    InputmotivoD.value.length >= 500  ) //Si el input es muy largo
                                {
                                    alert("Los campos no puede tener más de 100 caracteres");
                                    return false;
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
                                                return false;
                                             }
                                            else
                                            {                                
                                                                                                                                                                      
                                                alert("Datos finalizados con exito! (llena formaD)");
                                                return true;

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
    else if(VarValorSubmit == 'Guardar')
    {    
        alert("test");
        if(InputCURPD.value == "" || res.value == "CURP, Formato: No válido"){
            alert("Para guardar, favor de colocar un CURP válido");
            return false;
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
                        return false;
                     }
                    else
                    {                                
                                                                                                                                                                     
                        alert("Datos guardados con exito! (llena formaD)");
                        return true;
                    }
                }
                
            }
            else{
                alert("Datos guardados con exito! (llena formaD)");
                return true;
            }
        }

    }
    else
    {
        //Va a actualizar
        var selectCoord = document.getElementById("opcionesValidacionD").value;
        var MensajeCoord = document.getElementById("CoordComentarioD").value;
        if(selectCoord == 'Pendiente' || selectCoord == '' || MensajeCoord == '' || MensajeCoord == 'Sin comentarios'){
            return false;
        }
        else{
            return true;
        }
    }

}

function validarNewFormaDoctorado(input)
{

    var InputNombreD = document.getElementById("newInputNombreD");
    var InputAMaternoD = document.getElementById("newInputAMaternoD");
    var InputAPaternoD = document.getElementById("newInputAPaternoD");
    var InputFechaNacimientoD = document.getElementById("newInputFechaNacimientoD");
    var InputLugarDeNacimientoD = document.getElementById("newInputLugarDeNacimientoD");
    var InputNacionalidadD = document.getElementById("newInputNacionalidadD");
    var InputEstadoCivilD = document.getElementById("newInputEstadoCivilD");
    var InputCURPD = document.getElementById("newInputCURPD");
    var InputDependenciasD = document.getElementById("newInputDependenciasD");

    /* Inputs de información de contacto */
    var InputTelefonoD = document.getElementById("newInputTelefonoD");
    var InputCorreoD = document.getElementById("newInputCorreoD");
    var InputSkypeD = document.getElementById("newInputSkypeD");
    var InputFBD = document.getElementById("newInputFBD");

    /* Inputs de información de dirección */
    var InputCalleD = document.getElementById("newInputCalleD");
    var InputNoExtD = document.getElementById("newInputNoExtD");
    var InputNoIntD = document.getElementById("newInputNoIntD");
    var InputColoniaD = document.getElementById("newInputColoniaD");
    var InputCiudadD = document.getElementById("newInputCiudadD");
    var InputEstadoD = document.getElementById("newInputEstadoD");
    var InputCPD = document.getElementById("newInputCPD");
    
    /* Inputs de información personal */
    var InputInstitucionD = document.getElementById("newInputInstitucionD");
    var InputpinstitucionD = document.getElementById("newInputpinstitucionD");
    var InputInstitucionPosgradoD = document.getElementById("newInputInstitucionPosgradoD");
    var InputpInstitucionPosgradoD = document.getElementById("newInputpInstitucionPosgradoD");
    var InputrsitituladoD = document.getElementById("newInputrsitituladoD");
    var InputrnotituladoD = document.getElementById("newInputrnotituladoD");
    var InputxpPD = document.getElementById("newInputxpPD");
    var InputxpDD = document.getElementById("newInputxpDD");
    var InputrsipropD = document.getElementById("newInputrsipropD");
    var InputrnopropD = document.getElementById("newInputrnopropD");
    var InputaniospropD = document.getElementById("newInputaniospropD");
    var InputmotivoD = document.getElementById("newInputmotivoD");
    var Inputarchivosubido1D = document.getElementById("newInputarchivosubido1D");
    let siTituladoD=0;
    let siPropD=0;

    /* Validación CURP */
    var res = document.getElementById("newresultadoD");

    /* Se valida completamente */
    if(input.value == 'Enviar')
    {        
        if(InputNombreD.value == '' || InputAMaternoD.value == '' || InputAPaternoD.value == '' || 
        InputFechaNacimientoD.value == ''|| InputLugarDeNacimientoD.value == ''
        || InputNacionalidadD.value == '' || InputEstadoCivilD.value == '' || InputCURPD.value == '' || 
        InputDependenciasD.value == '' || InputTelefonoD.value == '' || InputCorreoD.value == '' || 
        InputSkypeD.value == '' || InputFBD.value == '' || InputCalleD.value == '' || InputNoExtD.value == ''
        || InputColoniaD.value == '' || InputCiudadD.value == '' || InputEstadoD.value == '' || InputCPD.value == '') //Si el input no es válido
        {
            alert("Favor de llenar todos los campos obligatorios");
            return false;
        }
        else
        {
            if(InputNombreD.value.length >= 100 || InputAMaternoD.value.length >= 100 || InputAPaternoD.value.length >= 100 ||
                InputFechaNacimientoD.value.length >= 100 || InputLugarDeNacimientoD.value.length >= 100 || InputNacionalidadD.value.length >= 100 ||
                InputEstadoCivilD.value.length >= 100 || InputCURPD.value.length >= 100 || InputDependenciasD.value.length >= 100 ||
                InputTelefonoD.value.length >= 100 || InputCorreoD.value.length >= 100 || InputSkypeD.value.length >= 100 ||
                InputFBD.value.length >= 100 || InputCalleD.value.length >= 100 || InputNoExtD.value.length >= 100 ||
                InputNoIntD.value.length >= 100 || InputColoniaD.value.length >= 100 || InputCiudadD.value.length >= 100 ||
                InputEstadoD.value.length >= 100 || InputCPD.value.length >= 100) //Si el input es muy largo
            {
                alert("Los campos no puede tener más de 100 caracteres");
                return false;
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
                    return false;
                }
                else{

                    //Se hace submit de forma
                    //document.getElementById("formaP").submit();
                    if(InputInstitucionD.value == '' || InputpinstitucionD.value == ''|| InputInstitucionPosgradoD.value == ''
                    || InputpInstitucionPosgradoD.value == ''  ||  
                        InputxpPD.value == '' || InputxpDD.value == '' || 
                        InputaniospropD.value == '' || InputmotivoD.value == ''|| 
                        Inputarchivosubido1D.value == '') //Si el input no es válido
                    {
                        alert("Favor de llenar todos los campos obligatorios");
                        return false;
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
                            return false;
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
                                return false;
                            }
                            else
                            {                            
                                if(InputInstitucionD.value.length >= 100 || InputpinstitucionD.value.length >= 100 
                                    ||InputInstitucionPosgradoD.value.length >= 100 ||InputpInstitucionPosgradoD.value.length >= 100 
                                    ||InputxpPD.value.length >= 500 || InputxpDD.value.length >= 500 ||
                                    InputaniospropD.value.length >= 100 ||
                                    InputmotivoD.value.length >= 500  ) //Si el input es muy largo
                                {
                                    alert("Los campos no puede tener más de 100 caracteres");
                                    return false;
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
                                                alert("Archivo 1 muy grande");
                                                return false;
                                             }
                                            else{                                                        
                                                alert("Datos finalizados con exito! (nueva entrada D)");
                                                return true;
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
            return false;
        }
        else{
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
                        alert("Archivo 1 muy grande");
                        return false;
                     }
                    else
                    {                                
                      
                        alert("Datos guardados con exito! (nueva entrada D)");
                        return true;
       
                    }
                }
            }
            else{
                alert("Datos guardados con exito! (nueva entrada D)");
                return true;
            }
            
        }

    }

}


function TestButton(input){
    var test = document.getElementById("prevmisolicitudinputcurp");
    alert(test.value)
}


function ValorSubmit(input){
    VarValorSubmit = input.value;
}
        
           








