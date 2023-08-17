const pc = require('picocolors');
const aux = require('./aux')

const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
const option = {
    validate: true
};
// const mdlinks = (path, options) => {
//     return new Promise((resolve, reject) => {

//     })
//     console.log(pc.blue('hola soy mdlink'));
// };
const stats = aux.pathStat(path)

if (aux.pathExist && stats.isFile()) {
    // console.log('aca')
    const absolute = aux.isAbsolute(path)
    // console.log(absolute)
    if (absolute) {
        const md = aux.isMarkdown(path);
        if (md) {
            // console.log('ms')
            let array = aux.readingFile(path);
            if (option && option.validate == true) {
                //console.log('aca estoy', array)
                try {
                    const validate = aux.validateLink(array);
                    if(validate){
                        let resuelto = aux.resolvePromise(validate);
                        console.log(resuelto)
                    }
                    // console.log(resuelto)
                    // console.log('hola', validate)
                } catch {
                    console.log('error')
                }

            } else {
                // console.log('else')
            }
        }
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

