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
function validarInput(input) {
    
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("resultado");
        valido = "No válido";
    if (curpValida(curp)) {
        valido = "Válido";
        //resultado.classList.add("ok");
    } else {
        //resultado.classList.remove("ok");
    }
    resultado.innerText = "CURP, Formato: " + valido;
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

                    //Se hace submit de forma
                    //document.getElementById("formaP").submit();
                }
            }
        }
      
}
