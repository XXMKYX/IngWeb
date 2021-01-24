//Validacion de Formato
function curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);

    if (!validado)
        return false;
    //Verifiicacion desde https://consultas.curp.gob.mx/CurpSP/  
    function digitoVerificador(curp17) {
        var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma = 0.0,
            lngDigito = 0.0;
        for (var i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }

    if (validado[2] != digitoVerificador(validado[1]))
        return false;
    return true;
}

//Validacion Final
function validarInputM(input) {
    
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("newresultadoM");
        valido = "No válido";
    if (curpValida(curp)) {
        valido = "Válido";
        //resultado.classList.add("ok");
    } else {
        //resultado.classList.remove("ok");
    }
    resultado.value = "CURP, Formato: " + valido;
}

function LlenarvalidarInputM(input) {
    
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("resultadoM");
        valido = "No válido";
    if (curpValida(curp)) {
        valido = "Válido";
        //resultado.classList.add("ok");
    } else {
        //resultado.classList.remove("ok");
    }
    resultado.value = "CURP, Formato: " + valido;
}


//Validar CURP en new M
function validarInputD(input) {
    
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("newresultadoD");
        valido = "No válido";
    if (curpValida(curp)) {
        valido = "Válido";
        //resultado.classList.add("ok");
    } else {
        //resultado.classList.remove("ok");
    }
    resultado.value = "CURP, Formato: " + valido;
}

//Validar CURP en llenar M
function LlenarvalidarInputD(input) {
    
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("resultadoD");
        valido = "No válido";
    if (curpValida(curp)) {
        valido = "Válido";
        //resultado.classList.add("ok");
    } else {
        //resultado.classList.remove("ok");
    }
    resultado.value = "CURP, Formato: " + valido;
}

function validarFormaPersonal(input)
{
    /* Inputs de información personal */
    var InputNombre = document.getElementById("InputNombreM");
    var InputAMaterno = document.getElementById("InputAMaternoM");
    var InputAPaterno = document.getElementById("InputAPaternM");
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
    var InputEstado = document.getElementById("InputCPM");
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
                }
            }
        }
      
}
