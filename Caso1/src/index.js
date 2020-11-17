/* Arranca la informacion */
const app = require('./app');//Llama app.js

async function main() { 
    await app.listen(app.get('port')); //Escuchando servidor port de app.js
    console.log('Server on port', app.get('port'));
}

main();