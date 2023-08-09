const pc = require('picocolors');
const aux = require('./aux')

const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/README.md';
// const mdlinks = (path, options) => {
//     return new Promise((resolve, reject) => {

//     })
//     console.log(pc.blue('hola soy mdlink'));
// };
const stats = aux.pathStat(path)

if (aux.existsPath && stats.isFile()) {
    const currentPath = aux.isAbsolute(path) ? path : aux.convertToAbsolute(path);
    const isMd = aux.isMarkdown(currentPath)
    if (isMd === '.md') {
        const readingCurrentFile = aux.readingFile(currentPath);
        // console.log(pc.bgCyan(readingCurrentFile))
        const regex = /\[+[a-zA-Z0-9.-].+\]+\([a-zA-Z0-9.-].+\)/gm;
        const arrayLinks = readingCurrentFile.match(regex);
        console.log(arrayLinks);
        
        // const arrayOfFile = readingCurrentFile.split(' ');
        // arrayOfFile.forEach((link) => {
        //     const array = [];
            

        //     // const found = readingCurrentFile.match(regex)
        //     if (link.match(regex)) {
        //         array.push(link)
        //     }
        // })

        // let arrayLinks = []

    }
}
// mdlinks('prueba.md', true)
// .then((response) =>{
//     console.log(response)
// })
// .catch((err) =>{
//     console.log('me petaquie ' + err)
// })



// module.exports = { mdlinks }