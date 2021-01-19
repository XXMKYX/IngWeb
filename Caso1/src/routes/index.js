const {Router}=require('express');
const router = Router();
const fs = require('fs');//Modulo de lectura .json
const glob = require('glob');
//EN CASO DE ERROR. COMENTAR
//const json_preg = fs.readFileSync('src/preg.json','utf-8')//Lee el JSON
//EN CASO DE ERROR. COMENTAR
//const preg = JSON.parse(json_preg)//Inicializando .JSON pasando a JSON

//MASTER
//const json_master = fs.readFileSync('src/master.json','utf-8')//Lee el JSON

//const master = JSON.parse(json_master)//Inicializando .JSON pasando a JSON

//DOCTORADO
//const json_doc = fs.readFileSync('src/doc.json','utf-8')//Lee el JSON

//const doc = JSON.parse(json_doc)//Inicializando .JSON pasando a JSON

/* Guardando datos en Array .JS*/

//EN CASO DE ERROR. DESCOMENTAR
var preg = []; //Arreglo para guardar datos
var master = [];
var doc = [];

glob("src/views/Personal/*.json",function(err,files){
  if(err) {
    console.log("No encuentro la carpeta", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { //lee cada json
      if(err) {
        console.log("No se puede leer", err);
      }
      var obj = JSON.parse(data);
      preg.push(obj);
    });
  });
});

glob("src/views/Maestria/*.json",function(err,files){
  if(err) {
    console.log("No encuentro la carpeta", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { //lee cada json
      if(err) {
        console.log("No se puede leer", err);
      }
      var obj = JSON.parse(data);
      master.push(obj);
    });
  });
});

glob("src/views/Doctorado/*.json",function(err,files){
  if(err) {
    console.log("cannot read the folder, something goes wrong with glob", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { // Read each file
      if(err) {
        console.log("cannot read the file, something goes wrong with the file", err);
      }
      var obj = JSON.parse(data);
      doc.push(obj);
    });
  });
});


router.get('/', (req, res) => {
  res.render('index', {preg,master,doc});
});



/* Ruta inicial */
router.get('/', (req, res) => {
    res.render('index.ejs',{
      preg //Pasa la lista de valores 
    });
  });

  //Obtiene datos
  router.post('/index',(req,res)=>{
    console.log(req.body);
    res.send('Index obtenido');
  })
//render formulario
router.get('/personal_data',(req,res)=>{
  res.render('personal_data');
})
//Obtiene datos formulario
router.post('/personal_data',(req,res)=>{
  console.log(req.body);
  
  const { nombreM, apaternoM, amaternoM, fechaM, lugarM, nacionalidadM, civilM, curpM, dependenciasM, telefonoM, emailM, skypeM, fbM, CalleM, NoExtM, NoIntM, ColoniaM, CiudadM, EstadoM, CPM} = req.body;
/* Validacion */
  //if (!nombre || !apaterno || !amaterno || !fecha|| !lugar|| !nacionalidad ||!civil ||!curp ||!dependencias ||!telefono ||!email ||!skype ||!fb ||!Calle ||!NoExt ||!NoInt ||!Colonia ||!Ciudad ||!Estado ||!CP) {
  //  res.status(400).send("Tienes que llenar todos los datos - Personal");
  //  return;
  // }

  let newpreg = {
    nombreM,
    apaternoM,
    amaternoM,
    fechaM,
    lugarM,
    nacionalidadM,
    civilM,
    curpM,
    dependenciasM,
    telefonoM,
    emailM,
    skypeM,
    fbM,
    CalleM,
    NoExtM,
    NoIntM,
    ColoniaM,
    CiudadM,
    EstadoM,
    CPM
  };

  // agregando al array
  //preg.push(newpreg);
  
  // agregando al archivo
  //const json_preg = JSON.stringify(preg) //Convierte la lista a string
  //fs.writeFileSync('src/preg.json', json_preg, 'utf-8') //Guarda string en formato utf-8
  const json_datos = JSON.stringify(newpreg);
  fs.writeFile('src/views/Personal/'+curpM+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('Registro guardado en archivo');
  });
  //res.send('Datos obtenidos');
})

// MAESTRIA

/* Ruta inicial */
router.get('/', (req, res) => {
  res.render('index.ejs',{
    master //Pasa la lista de valores 
  });
});

//Obtiene datos
router.post('/index',(req,res)=>{
  console.log(req.body);
  res.send('Index obtenido');
})
//render formulario
router.get('/master_data',(req,res)=>{
  res.render('master_data',{master});
})
//Obtiene datos formulario
router.post('/master_data',(req,res)=>{
  console.log(req.body);

const { InstitucionM, pinstitucionM, tituladoMaestriaM,carreraM, xpPM, xpDM, propedeuticoM, aniospropM, motivoM,archivosubido1M} = req.body;
/* Validacion */
  if (!InstitucionM  ||!pinstitucionM  ||!tituladoMaestriaM  ||!carreraM ||!xpPM ||!xpDM ||!propedeuticoM ||!aniospropM ||!motivoM||!archivosubido1M) {
    res.status(400).send("Tienes que llenar todos los datos - Maestría ");
    return;
  }

  let newmaster = {
    InstitucionM,
    pinstitucionM,
    tituladoMaestriaM,
    carreraM,
    xpPM,
    xpDM,
    propedeuticoM,
    aniospropM,
    motivoM,
    archivosubido1M
  };
  // agregando al array
  master.push(newmaster);
  
  // agregando al archivo
  //const json_master = JSON.stringify(master) //Convierte la lista a string
  //fs.writeFileSync('src/master.json', json_master, 'utf-8') //Guarda string en formato utf-8
  const json_datos = JSON.stringify(newmaster);
  fs.writeFile('src/views/Maestria/'+carreraM+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('Registro guardado en archivo');
  });
  //res.s
  //res.send('Datos obtenidos');

})



// DOCTORADO
/* Ruta inicial */
router.get('/', (req, res) => {
  res.render('index.ejs',{
    doc //Pasa la lista de valores 
  });
});

//Obtiene datos
router.post('/index',(req,res)=>{
  console.log(req.body);
  res.send('Index obtenido');
})
//render formulario
router.get('/doc_data',(req,res)=>{
  res.render('doc_data',{doc});
})
//Obtiene datos formulario
router.post('/doc_data',(req,res)=>{
  console.log(req.body);

  const { InstitucionD, pinstitucionD,InstitucionPosgradoD,pInstitucionPosgradoD, tituladoDoctoradoD, xpPD, xpDD, propedeuticoD, aniospropD, motivoD, archivosubido1D, archivosubido2D} = req.body;
   /*Validacion*/
    if (!InstitucionD  ||!pinstitucionD  ||!InstitucionPosgradoD ||!pInstitucionPosgradoD ||!tituladoDoctoradoD ||!xpPD ||!xpDD ||!propedeuticoD ||!aniospropD ||!motivoD||!archivosubido1D ||!archivosubido2D) {
      //res.status(400).send("Tienes que llenar todos los datos - Doctorado");
      return;
    }
  
    let newdoc = {
      InstitucionD,
      pinstitucionD,
      InstitucionPosgradoD,
      pInstitucionPosgradoD,
      tituladoDoctoradoD,
      xpPD,
      xpDD,
      propedeuticoD,
      aniospropD,
      motivoD,
      archivosubido1D,
      archivosubido2D
    };
  // agregando al array
  doc.push(newdoc);
  
  // agregando al archivo
  //const json_doc = JSON.stringify(doc) //Convierte la lista a string
  //fs.writeFileSync('src/doc.json', json_doc, 'utf-8') //Guarda string en formato utf-8
  const json_datos = JSON.stringify(newdoc);
  fs.writeFile('src/views/Doctorado/'+InstitucionD+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('Registro guardado en archivo');
  });
  //res.s
  //res.send('Datos obtenidos');
})

  module.exports = router;