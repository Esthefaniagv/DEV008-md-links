const path = require('node:path');
const fs = require('node:fs');
const pc = require('picocolors');
const axios = require('axios')
const { resolve } = require('node:dns');
const { isatty } = require('node:tty');


//1.conocer si la ruta ingresada es valida 
const pathExist = (inputPath) => {
  const exist = fs.existsSync(inputPath)
  if (exist) {
    return true
  } else {
    console.error(pc.bgRed("Following path does not exist on Fyle Sistem :" + inputPath))
  }
}

//2.conocer los stats de path (verificar si es doc o file)

const pathStat = (inputPath) => { return fs.statSync(inputPath) }

// console.log(pathStat('prueba.md'))

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

const knowDocs = (inputPath, filesInDir) => {
  // console.trace([inputPath]);
  if (pathStat(inputPath).isFile()) {
    if (isMarkdown(inputPath)) {
      filesInDir.push(inputPath)
    }
    return
  }
  let filenames = fs.readdirSync(inputPath);
  filenames.forEach((file) => {
    knowDocs(inputPath + '/' + file, filesInDir)
  })
  return filesInDir
}

let links = []
// 5.mostrar un documento en consola
const readingFile = (inputPath) => {
  const file = fs.readFileSync(inputPath, 'utf-8');
  const regex = /\[([^\[]+)\](\(.*\))/gm
  const result = file.match(regex);
  if (result) {
    const singleMatch = /\[([^\[]+)\]\((.*)\)/
    for (let i = 0; i < result.length; i++) {
      let text = singleMatch.exec(result[i])
      links.push({ text: `${text[1]}`, href: `${text[2]}`, file: inputPath })
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
  }
  );
  return resultValidate
}


const resolvePromise = (arrayOfPromises) => {
  let newPromiseArray = []
  let resolvePromise = [...arrayOfPromises]
  arrayOfPromises.forEach((promise) => {
    newPromiseArray.push(promise.status)
  })
  return Promise.all(newPromiseArray)
    .then((r) => {
      for (let i = 0; i < arrayOfPromises.length; i++) {
        const statusPromise = arrayOfPromises[i].status = r[i].status
        const statusTxt = arrayOfPromises[i].stsText = r[i].statusText
      }
      console.log(resolvePromise)
      return resolvePromise;
    })
    .catch((e) => {
      console.error(pc.bgRed('se ha encontrado un error: ' + e))
    })
}

//acceder a los stats de los links despues de agregar todas sus propiedades 
// const getStat = (links) => {
//   // const arrayStat = []
//   // resolvePromise()
//   // .then((r) => {
//   //   r.forEach((link) => {
//   //     arrayStat.push(link.href)
//   //   })
//   //   if (arrayStat != []) {
//   //       let total = 'Total: ' + pc.bgMagenta(arrayStat.length)
//   //       let unique = 'Unique: ' + pc.bgMagenta(new Set(arrayStat).size)
//   //       console.log(total, unique)
//   //     }
//   //     return arrayStat
//   // })
//   const arrayStat = []
//   const result = [...links]
//   result.forEach((link) => {
//     arrayStat.push(link.href)
//   })
//   if (arrayStat) {
//     let total = 'Total: ' + pc.bgMagenta(arrayStat.length)
//     let unique = 'Unique: ' + pc.bgMagenta(new Set(arrayStat).size)
//     console.log(total, unique)
//   }
//   return arrayStat
// }
// getStat(links)


module.exports = {
  pathExist,
  pathStat,
  isMarkdown,
  isAbsolute,
  // convertToAbsolute,
  knowDocs,
  readingFile,
  validateLink,
  resolvePromise,

}

