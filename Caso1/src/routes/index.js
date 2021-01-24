const {Router}=require('express');
const router = Router();
const fs = require('fs');//Modulo de lectura .json
const glob = require('glob');
let multer  = require('multer');

var maestria = []; //Arreglo para guardar datos
var doctorado = [];
var doc = [];

glob("src/views/Master/MasterFinalizadas/*.json",function(err,files){
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

glob("src/views/Doctor/DocFinalizadas/*.json",function(err,files){
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

glob("src/views/Doctor/*.json",function(err,files){
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

//Se imprime o la solicitud de maestría o de doctorado
router.get('/MiSolicitudM', (req, res) => {
  res.render('../views/elements/MiSolicitudM');
});

router.get('/MiSolicitudD', (req, res) => {
  res.render('../views/elements/MiSolicitudD');
});

//Se imprime o la forma ya llenada parcialmente o la forma sin llenar
router.get('/LlenarFormaM', (req, res) => {
  res.render('../views/elements/LlenarFormaM');
});

router.get('/LlenarFormaD', (req, res) => {
  res.render('../views/elements/LlenarFormaD');
});

router.get('/NuevaEntrada', (req, res) => {
  res.render('../views/elements/NuevaEntrada');
});


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

  console.log(req.body);
  const {tipoM,validacionM, dateM,nombreM, apaternoM, amaternoM, fechaM, lugarM, nacionalidadM, civilM, curpM, dependenciasM, telefonoM, emailM, skypeM, fbM, CalleM, NoExtM, NoIntM, ColoniaM, CiudadM, EstadoM, CPM, InstitucionM, pinstitucionM, tituladoMaestriaM,carreraM, xpPM, xpDM, propedeuticoM, aniospropM, motivoM,archivosubido1M, comentarioM, orden} = req.body;

  console.log(orden);
  let newpreg = {
    tipoM: "Maestria",
    validacionM,
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
    comentarioM
  };

  const json_datos = JSON.stringify(newpreg);
  if(orden == "Enviar"){
    fs.writeFile('src/views/Master/MasterFinalizadas/'+curpM+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de maestría finalizado en archivo');
    });
    res.redirect('/');
  }
  else if((orden == "Guardar")){
    fs.writeFile('src/views/Master/MasterParciales/'+curpM+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de maestría guardado en archivo');
    });
    res.redirect('/');
  }
  else{
    fs.writeFile('src/views/Master/MasterFinalizadas/'+curpM+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de maestría validado en archivo');
    });
    res.redirect('/');
  }
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
  res.render('master_data',{doctorado});
})
//Obtiene datos formulario



router.post('/master_data', multer({
  storage: multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,'src/views/Doctor/PDF/')
    },
    filename: (req,file,cb) => {
      cb(null, req.body.curpD+"_CV.pdf")
    }
  })
}).single('archivosubido1D') ,(req, res) => {
  console.log(req.body);

const { dateD, validacionD, nombreD, apaternoD, amaternoD, fechaD, lugarD, nacionalidadD, civilD, curpD, dependenciasD, telefonoD, emailD, skypeD, fbD, CalleD, NoExtD, NoIntD, ColoniaD, CiudadD, EstadoD, CPD,InstitucionD, pinstitucionD,InstitucionPosgradoD,pInstitucionPosgradoD, tituladoDoctoradoD, xpPD, xpDD, propedeuticoD, aniospropD, motivoD, archivosubido1D, comentarioD, orden} = req.body;

  let newmaster = {
    tipoD : "Doctorado",
    validacionD,
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
    comentarioD
  };

  const json_datos = JSON.stringify(newmaster);
  if(orden == "Enviar"){
    fs.writeFile('src/views/Doctor/DocFinalizadas/'+curpD+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de doctorado finalizado en archivo');
    });
    res.redirect('/');
  }
  else if(orden == "Guardar"){
    fs.writeFile('src/views/Doctor/DocParciales/'+curpD+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de doctorado guardado en archivo');
    });
    res.redirect('/');
  }
  else{
    fs.writeFile('src/views/Doctor/DocFinalizadas/'+curpD+'.json', json_datos, 'utf-8',function (err) {
      if (err) throw err;
      console.log('Registro de doctorado validado en archivo');
      res.redirect('/');
    });
  }
  
});




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

router.post('/Busqueda', (req, res) => 
{   
    
  const {CURP,buscar} = req.body;  
  console.log(req.body);

  if(buscar=="BuscarM"){     
    try {
      BusquedaJS = fs.readFileSync('src/views/Master/MasterFinalizadas/'+CURP+'.json', 'utf8')
      console.log(BusquedaJS);     
      JsonBusqueda=JSON.parse(BusquedaJS);      
      res.redirect('/MiSolicitudM');  

    } catch (error) {
      console.log("No existe ese directorio en la carpeta de finalizadas de Maestría");
      try 
      {
          BusquedaJSD = fs.readFileSync('src/views/Doctor/DocFinalizadas/'+CURP+'.json', 'utf8')     
          JsonBusquedaD=JSON.parse(BusquedaJSD);        
          res.redirect('/MiSolicitudD'); 

      } catch (error) {
          console.log("No existe ese directorio en la carpeta de finalizadas de Doctorado");
          res.redirect('/');
      }
    }        
  }
});

router.post('/Llenar', (req, res) => 
{   
    
  const {CURP,buscar} = req.body;  
  console.log(req.body);

  if(buscar=="BuscarM"){     
    try 
    {
        BusquedaJS = fs.readFileSync('src/views/Master/MasterFinalizadas/'+CURP+'.json', 'utf8')
        console.log(BusquedaJS);     
        JsonBusqueda=JSON.parse(BusquedaJS);      
        res.redirect('/'); //Ya existe una solicitud finalizada en maestría, se mandaa a raíz  

    } catch (error) {
      console.log("No existe ese directorio en la carpeta de finalizadas de Maestría");
      try 
      {
          BusquedaJSD = fs.readFileSync('src/views/Doctor/DocFinalizadas/'+CURP+'.json', 'utf8')     
          JsonBusquedaD=JSON.parse(BusquedaJSD);        
          //res.redirect('/NuevaEntrada'); 
          res.redirect('/'); //Ya existe una solicitud finalizada en doctorado, se mandaa a raíz  
          
      } catch (error) {
          console.log("No existe ese directorio en la carpeta de finalizadas de Doctorado");
          try 
          {
            LLenarFormaD = fs.readFileSync('src/views/Doctor/DocParciales/'+CURP+'.json', 'utf8')     
            JsonLLenarFormaD=JSON.parse(LLenarFormaD);  
            console.log('Se encuentra parcial de doctorado');         
            res.redirect('LlenarFormaD'); 
          } catch (error) {
              console.log('No se encontró una forma parcial de doctorado');
              try 
              {
                  LLenarFormaM = fs.readFileSync('src/views/Master/MasterParciales/'+CURP+'.json', 'utf8')     
                  JsonLLenarFormaM=JSON.parse(LLenarFormaM); 
                  console.log('Se encuentra parcial de maestría');      
                  res.redirect('/LlenarFormaM'); 
              } catch (error) {
                  console.log('No se encontró una forma parcial de maestria')
                  res.redirect('/NuevaEntrada'); 
              }
          }
          
      }
    }        
  }
});

router.get('/ValidacionD', (req, res) => {
  res.render('Coord/ValidacionD',{InformacionD});
});

router.get('/ValidacionM', (req, res) => {
  res.render('Coord/ValidacionM',{InformacionM});
});

router.get('/RevisarSol', (req, res) => {
  res.render('RevisarSol');
});


router.get('/ValidarD/:curpD', (req, res) => {
  InformacionD = doctorado.filter(alumno => alumno.curpD == req.params.curpD);
  try 
  {
      BusquedaJSD = fs.readFileSync('src/views/Doctor/DocFinalizadas/'+req.params.curpD+'.json', 'utf8')     
      JsonBusquedaD=JSON.parse(BusquedaJSD); 
      console.log("Se encuentra directorio");
      res.redirect('/ValidacionD'); 
      
  } catch (error) {
      console.log("No existe ese directorio en la carpeta de finalizadas de Doctorado");
      res.redirect('/');
  }
});

router.get('/ValidarM/:curpM', (req, res) => {
  InformacionM = maestria.filter(alumno => alumno.curpM == req.params.curpM);
  try 
  {
      BusquedaJSM = fs.readFileSync('src/views/Master/MasterFinalizadas/'+req.params.curpM+'.json', 'utf8')     
      JsonBusquedaM=JSON.parse(BusquedaJSM); 
      console.log("Se encuentra directorio");
      res.redirect('/ValidacionM'); 

  } catch (error) {
      console.log("No existe ese directorio en la carpeta de finalizadas de Doctorado");
      res.redirect('/');
  }
  // saving data
  
});

  module.exports = router;