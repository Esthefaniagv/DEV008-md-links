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
    const absolute = aux.isAbsolute(path)
    if (absolute) {
        const md = aux.isMarkdown(path);
        if (md) {
            let array = aux.readingFile(path);
            if (option && option.validate == true) {
                try {
                    const validate = aux.validateLink(array);
                    if (validate) {
                        console.log(typeof aux.resolvePromise(validate))
                        console.log('HOLAAA' , aux.resolvePromise(validate))
                    }
                } catch {
                    console.log('error')
                }
            } else {
                console.log('else')
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

