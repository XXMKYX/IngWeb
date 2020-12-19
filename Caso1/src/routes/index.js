const {Router}=require('express');
const router = Router();
const fs = require('fs');//Modulo de lectura .json

//const json_preg = fs.readFileSync('src/preg.json','utf-8')//Lee el JSON

//const preg = JSON.parse(json_preg)//Inicializando .JSON pasando a JSON

/* Guardando datos en Array .JS*/
const preg = []; //Arreglo para guardar datos
const master = [];
//const preregistro = fs.readFileSync('src/preregistro.json', 'utf-8');
//let preg = JSON.parse(preregistro); 


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
  
  const { nombre, apaterno, amaterno, fecha, lugar, nacionalidad, civil, curp, dependencias, telefono, email, skype, fb, Calle, NoExt, NoInt, Colonia, Ciudad, Estado, CP} = req.body;
/* Validacion */
  if (!nombre || !apaterno || !amaterno || !fecha|| !lugar|| !nacionalidad ||!civil ||!curp ||!dependencias ||!telefono ||!email ||!skype ||!fb ||!Calle ||!NoExt ||!NoInt ||!Colonia ||!Ciudad ||!Estado ||!CP) {
    res.status(400).send("Tienes que llenar todos los datos");
    return;
  }

  let newpreg = {
    nombre,
    apaterno,
    amaterno,
    fecha,
    lugar,
    nacionalidad,
    civil,
    curp,
    dependencias,
    telefono,
    email,
    skype,
    fb,
    Calle,
    NoExt,
    NoInt,
    Colonia,
    Ciudad,
    Estado,
    CP
  };

  // agregando al array
  preg.push(newpreg);
  
  // agregando al archivo
  const json_preg = JSON.stringify(preg) //Convierte la lista a string
  fs.writeFileSync('src/preg.json', json_preg, 'utf-8') //Guarda string en formato utf-8

  res.send('Datos obtenidos');
})

// MAESTRIA

//render formulario
router.get('/master_data',(req,res)=>{
  res.render('master_data');
})
//Obtiene datos formulario
router.post('/master_data',(req,res)=>{
  console.log(req.body);

const { InstitucionM, pinstitucionM, titulado, xpPM, xpDM, propedeutico, aniospropM, motivoM, archivosubido} = req.body;
/* Validacion */
  if (!InstitucionM  ||!pinstitucionM  ||!titulado  ||!xpPM ||!xpDM ||!propedeutico ||!aniospropM ||!motivoM ||!archivosubido) {
    res.status(400).send("Tienes que llenar todos los datos");
    return;
  }

  let newmaster = {
    InstitucionM,
    pinstitucionM,
    titulado,
    xpPM,
    xpDM,
    propedeutico,
    aniospropM,
    motivoM,
    archivosubido
  };
  // agregando al array
  master.push(newmaster);
  
  // agregando al archivo
  const json_master = JSON.stringify(master) //Convierte la lista a string
  fs.writeFileSync('src/master.json', json_master, 'utf-8') //Guarda string en formato utf-8

  res.send('Datos obtenidos');
})

  module.exports = router;