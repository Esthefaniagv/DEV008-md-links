const path = require('node:path');
const fs = require('node:fs');
const pc = require('picocolors');
const { resolve } = require('node:dns');

// const inputPath = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
//1.conocer si la ruta ingresada es valida 
//.existSync
//.access
//conocer los stats de path (verificar si es doc o file)
const existsPath = (inputPath) => {
  return (fs.existsSync(inputPath)) ? true : false;
}

const pathStat = (inputPath) => { return fs.statSync(inputPath)}

// const pathStat = (inputPath) => {
//   fs.stat(inputPath, 'utf-8', (err, stats) => {
//     if (err) {
//       return (pc.bgRed('error en lectura de ruta' + err))
//     }
//     if(stats.isFile()){
//       return console.log('hola')
//     }
//     else{
//       return stats
//     }
//   })
// };


//2. conocer si la ruta es absoluta 

const isAbsolute = (inputPath) => {
  let absolute = path.isAbsolute(inputPath);
  return absolute;
}

// isAbsolute(inputPath);

// //3. convertir a absoluta 

const convertToAbsolute = (inputPath) => {
  let convert = path.resolve(inputPath);
  return convert;
}
// convertToAbsolute(inputPath);

// //4. verificar si es extesion md

const isMarkdown = (inputPath) => {
  let mdfile = path.extname(inputPath);
  return mdfile;
}

// 5. leer un directorio con archivos 

//leer un directorio asincrono

const knowDocs = (inputPath) => {
  let filenames = fs.readdirSync(inputPath);
  return filenames
}

//mostrar un documento en consola
const readingFile = (inputPath) => {return fs.readFileSync(inputPath, 'utf-8')};

// readingPathFile('prueba.md')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(pc.red('error ' + err));
//   })

//conocer los stats de un path 
// const checkStats = (inputPath) => {
//   fs.stat(inputPath, (err, stats) =>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log(pc.bgCyan(stats))
//     }
//   });
// };
// checkStats('prueba.md')

module.exports = {
  existsPath,
  pathStat,
  isMarkdown,
  isAbsolute,
  convertToAbsolute,
  knowDocs,
  readingFile
}

//Conocer la extension de un documento 
// const fileExtension = (input) => {
//   const knowfile = path.extname(input);
//   console.log(pc.bgMagenta(knowfile));
//     return
//   }
//   fileExtension('/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md');


// //unir dos rutas 
// const newPath = path.join('/home/Laboratoria/', './test');
// console.log(pc.bgWhite(newPath));


// //5. recorrer un directorio y conocer sus documentos, conocer cuales tienen ext .md
// let filemd = []
// const knowDocs = (inputPath) => {
//   let filenames = fs.readdirSync(inputPath);
//   // const filemd = filenames.filter((file) => path.extname === '.md')
//   // filenames.forEach(file => {
//   //   // console.log(pc.cyan(file));
//   //   if (path.extname(file) === '.md') {
//   //     //filter
//   //     console.log(pc.bgMagenta(file));
//   //     filemd.push(file);
//   //   }
//     console.log(filemd)
//     return
//   });
// }
// KnowDocs('/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links')