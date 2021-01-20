const {Router}=require('express');
const router = Router();
const fs = require('fs');//Modulo de lectura .json
const glob = require('glob');
let multer  = require('multer');

var maestria = []; //Arreglo para guardar datos
var doctorado = [];
var doc = [];

glob("src/views/Master/*.json",function(err,files){
  if(err) {
    console.log("No encuentro la carpeta", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { //lee cada json
      if(err) {
        console.log("No se puede leer", err);
      }
      var obj = JSON.parse(data);
      maestria.push(obj);
    });
  });
});

glob("src/views/Doctor/*.json",function(err,files){
  if(err) {
    console.log("No encuentro la carpeta", err);
  }
  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function (err, data) { //lee cada json
      if(err) {
        console.log("No se puede leer", err);
      }
      var obj = JSON.parse(data);
      doctorado.push(obj);
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
  res.render('index', {maestria,doctorado,doc});
});


/* Ruta inicial */
router.get('/', (req, res) => {
    res.render('index.ejs',{
      maestria //Pasa la lista de valores 
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


router.post('/personal_data', multer({
  storage: multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,'src/views/Master/PDF/')
    },
    filename: (req,file,cb) => {
      cb(null, req.body.curpM+"_CV.pdf")
    }
  })
}).single('archivosubido1M') ,(req, res) => {

  const {tipoM,validacionM, dateM,nombreM, apaternoM, amaternoM, fechaM, lugarM, nacionalidadM, civilM, curpM, dependenciasM, telefonoM, emailM, skypeM, fbM, CalleM, NoExtM, NoIntM, ColoniaM, CiudadM, EstadoM, CPM, InstitucionM, pinstitucionM, tituladoMaestriaM,carreraM, xpPM, xpDM, propedeuticoM, aniospropM, motivoM,archivosubido1M} = req.body;

  let newpreg = {
    tipoM: "Maestria",
    validacionM: "Pendiente",
    dateM,
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
    CPM,
    InstitucionM,
    pinstitucionM,
    tituladoMaestriaM,
    carreraM,
    xpPM,
    xpDM,
    propedeuticoM,
    aniospropM,
    motivoM,
    archivosubido1M,
    comentarioM: "Sin comentarios"
  };

  const json_datos = JSON.stringify(newpreg);
  fs.writeFile('src/views/Master/'+curpM+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('Registro guardado en archivo');
  });
  //res.send('Datos obtenidos');
});

//* Ruta inicial */
router.get('/', (req, res) => {
  res.render('index.ejs',{
    doctorado //Pasa la lista de valores 
  });
});

//Obtiene datos
router.post('/index',(req,res)=>{
  console.log(req.body);
  res.send('Index obtenido');
})
//render formulario
router.get('/master_data',(req,res)=>{
res.render('master_data');
})
//Obtiene datos formulario


router.post('/master_data', multer({
storage: multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,'src/views/Doctor/PDF/')
  },
  filename: (req,file,cb) => {
    cb(null, req.body.curpD+".pdf")
  }
})
}).single('archivosubido1D') ,(req, res) => {

const { dateD, nombreD, apaternoD, amaternoD, fechaD, lugarD, nacionalidadD, civilD, curpD, dependenciasD, telefonoD, emailD, skypeD, fbD, CalleD, NoExtD, NoIntD, ColoniaD, CiudadD, EstadoD, CPD,InstitucionD, pinstitucionD,InstitucionPosgradoD,pInstitucionPosgradoD, tituladoDoctoradoD, xpPD, xpDD, propedeuticoD, aniospropD, motivoD, archivosubido1D, archivosubido2D} = req.body;

  let newmaster = {
    tipoD : "Doctorado",
    validacionD: "Pendiente",
    dateD,
    nombreD,
    apaternoD,
    amaternoD,
    fechaD,
    lugarD,
    nacionalidadD,
    civilD,
    curpD,
    dependenciasD,
    telefonoD,
    emailD,
    skypeD,
    fbD,
    CalleD,
    NoExtD,
    NoIntD,
    ColoniaD,
    CiudadD,
    EstadoD,
    CPD,
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
    archivosubido2D,
    comentarioD: "Sin comentarios"
  };

  const json_datos = JSON.stringify(newmaster);
  fs.writeFile('src/views/Doctor/'+curpD+'.json', json_datos, 'utf-8',function (err) {
    if (err) throw err;
    console.log('Registro guardado en archivo');
  });
})




/* E S T O    N O    S I R V E*/


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
      nombreD,
      apaternoD,
      amaternoD,
      fechaD,
      lugarD,
      nacionalidadD,
      civilD,
      curpD,
      dependenciasD,
      telefonoD,
      emailD,
      skypeD,
      fbD,
      CalleD,
      NoExtD,
      NoIntD,
      ColoniaD,
      CiudadD,
      EstadoD,
      CPD,
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