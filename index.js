const pc = require('picocolors');
const aux = require('./aux')

// const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
// const option = '' ;
const mdlinks = (path, option) => {
    return new Promise((resolve, reject) => {
        if (path) {
            const stats = aux.pathStat(path)
            if (aux.pathExist) {
                const absolute = aux.isAbsolute(path)
                if (absolute) {
                    const md = aux.isMarkdown(path);
                    if (stats.isFile() && md) {
                        let array = aux.readingFile(path);
                        if (option === undefined) {
                            resolve(array);
                        }
                        if (option && option.validate == true) {
                            let validate = aux.validateLink(array);
                            if (validate) {
                                try {
                                    aux.resolvePromise(validate)
                                        .then((response) => {
                                            resolve(response)
                                        })
                                } catch (error) {
                                    throw new Error('Cannot access path provided')
                                }
                            }
                            else {
                                reject(new error('Error un process please try again'))
                            }
                        }
                    } else if (stats.isDirectory()) {
                        let directory = aux.knowDocs(path, []);
                        if (directory) {
                            directory.forEach(element => {
                                let oneLink = aux.readingFile(element);
                                if (option === undefined) {
                                    resolve(oneLink)
                                } if (option && option.validate === true) {
                                    let validate = aux.validateLink(oneLink)
                                    if(validate){
                                        try {
                                            aux.resolvePromise(validate)
                                            .then((r) =>
                                            resolve(r))
                                        } catch (error) {
                                            console.error('Cannot access path provided')
                                        }
                                    }
                                }
                            });

                        }
                    }
                }
            }
        }
    })
        ;
};

mdlinks('/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir')
    .then((links) => console.log(links))
    .catch((error) => console.error(error))

//PRUEBA DE ACCEDER A TODAS LAS VALIDACIONES, DAR RESPUESTA CON ARCHIVO MD. 

// if (path) {
//     const stats = aux.pathStat(path)
//     if (aux.pathExist && stats.isFile()) {
//         const absolute = aux.isAbsolute(path)
//         if (absolute) {
//             const md = aux.isMarkdown(path);
//             if (md) {
//                 let array = aux.readingFile(path);
//                 if (option && option.validate == true) {
//                     const validate = aux.validateLink(array);
//                     if (validate) {
//                         try {
//                             aux.resolvePromise(validate)
//                                 .then((r) => {
//                                     console.log(pc.bgGreen('Links answer'), r)
//                                 })
//                         } catch (error) {
//                             throw new Error('Cannot access path provided')
//                         }
//                     } else if (option !== true) {
//                         console.log('estas en else')
//                     }
//                 }
//             }
//         }
//     }
// }

//segunda prueba con resolve de promesa 
// if (path) {
//     const stats = aux.pathStat(path)
//     if (aux.pathExist && stats.isFile()) {
//         const absolute = aux.isAbsolute(path)
//         if (absolute) {
//             const md = aux.isMarkdown(path);
//             if (md) {
//                 let array = aux.readingFile(path);
//                 if (option === undefined) {
//                     console.log(array);
//                 }
//                 if (option && option.validate == true) {
//                     const validate = aux.validateLink(array);
//                     if (validate) {
//                         try {
//                             aux.resolvePromise(validate)
//                                 .then((response) => {
//                                     resolve(response)
//                                 })
//                         } catch (error) {
//                             throw new Error('Cannot access path provided')
//                         }
//                     }
//                     else {
//                         reject(new error('Error un process please try again'))
//                     }
//                 }
//             }
//         }
//     }
// }

// module.exports = { mdlinks }