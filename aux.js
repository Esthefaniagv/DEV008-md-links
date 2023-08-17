const path = require('node:path');
const fs = require('node:fs');
const pc = require('picocolors');
const axios = require('axios')
const { resolve } = require('node:dns');
const { isatty } = require('node:tty');

// const inputPath = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';

//1.conocer si la ruta ingresada es valida 
const pathExist = (inputPath) => {
  const exist = fs.existsSync(inputPath)
  if (exist) {
    console.log('true')
  } else {
    console.error(pc.bgRed("Following path does not exist on Fyle Sistem :" + inputPath))
  }
}

//2.conocer los stats de path (verificar si es doc o file)

const pathStat = (inputPath) => { return fs.statSync(inputPath) }


// 4. conocer si la ruta es absoluta y resolver 

const isAbsolute = (inputPath) => {
  let convertPath = path.isAbsolute(inputPath) ? true : path.resolve(inputPath);
  return convertPath
}

// 5. verificar si es extesion md

const isMarkdown = (inputPath) => {
  let mdfile = path.extname(inputPath) === '.md' ? true : false;
  return mdfile
}
// 6. leer un directorio con archivos 

const knowDocs = (inputPath) => {
  let filenames = fs.readdirSync(inputPath);
  return filenames
}
let links = []
// 5.mostrar un documento en consola
const readingFile = (inputPath) => {
  const file = fs.readFileSync(inputPath, 'utf-8');
  const regex = /\[([^\[]+)\](\(.*\))/gm

  // const regex = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/
  // const regex = /\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm;
  const result = file.match(regex);
  if (result) {
    const singleMatch = /\[([^\[]+)\]\((.*)\)/
    for (let i = 0; i < result.length; i++) {
      let text = singleMatch.exec(result[i])
      // console.log(result[i])
      links.push({ text: `${text[1]}`, href: `${text[2]}` })
      // console.log(links)
    }
  } else {
    console.error(pc.bgRed('No links found please try again with a diferent route'))
  }
  return links
};

// validar links con request http 
const validateLink = (links) => {
  const resultValidate = [...links]
  resultValidate.forEach((link) => {
    link.status = axios.get(link.href)
    // link.stsText = axios.get(link.href)
  }
  );
  return resultValidate
}

const resolvePromise = (arrayOfPromises) => {
  let newPromiseArray = []
  let objeto = [...links]
  arrayOfPromises.forEach((promise) => {
    newPromiseArray.push(promise.status)
  })
  Promise.all(newPromiseArray).then((r) => {
    for (let i = 0; i < arrayOfPromises.length; i++) {
      const statusPromise = arrayOfPromises[i].status = r[i].status
      const statusTxt = arrayOfPromises[i].stsText = r[i].statusText
      // console.log(statusTxt)
    }
    console.log(arrayOfPromises)
  })
    .catch((e) => {
      console.error(pc.bgRed('se ha encontrado un error: ' + e))
    })
}

module.exports = {
  pathExist,
  pathStat,
  isMarkdown,
  isAbsolute,
  // convertToAbsolute,
  knowDocs,
  readingFile,
  validateLink,
  resolvePromise
}

// 3. convertir a absoluta 

// const convertToAbsolute = (inputPath) => {
//   let convert = path.resolve(inputPath);
//   return convert;
// }
