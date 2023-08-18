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
                const validate = aux.validateLink(array);
                if (validate) {
                    try {
                        const resolve = aux.resolvePromise(validate)
                            .then((r) => {
                                console.log("SOY LA RESPUESTA", r)
                            })
                        // console.log(typeof resolve)
                        // console.log('HOLAAA', resolve)
                    } catch (error) {
                        throw new Error('ERROR DE EJECUCION DE RESOLVE')
                    }

                } else {
                    console.log('else')
                }
            }
        }
    }
}
// module.exports = { mdlinks }