const pc = require('picocolors');
const aux = require('./aux')

// const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
// const option = '' ;
const mdlinks = (path, option) => {
    return new Promise((resolve, reject) => {
        if (path) {
            const status = aux.pathStat(path)
            if (aux.pathExist) {
                const absolute = aux.isAbsolute(path)
                if (absolute) {
                    const md = aux.isMarkdown(path);
                    if (status.isFile() && md) {
                        let array = aux.readingFile(path);
                        if(option && option.stats === true){
                            resolve(array)
                        }
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
                                if(option.stats === true){
                                    try {
                                        aux.resolvePromise(validate)
                                            .then((response) => {
                                                resolve(response)
                                            })
                                    } catch (error) {
                                        throw new Error('Cannot access path provided')
                                    }
                                }
                            } 
                            else {
                                reject(new error('Error un process please try again'))
                            }
                        } 
                    } else if (status.isDirectory()) {
                        let directory = aux.knowDocs(path, []);
                        if (directory) {
                            directory.forEach(element => {
                                let oneLink = aux.readingFile(element);
                                if(option && option.stats === true){
                                    resolve(oneLink)
                                }
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

// mdlinks('/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md', {validate:true})
    // .then((links) => console.log(links))
    // .catch((error) => console.error(error))

exports = module.exports = mdlinks