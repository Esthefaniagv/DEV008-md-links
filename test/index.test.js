const bar = require('./const')
const axios = require('axios')
const aux = require('../aux.js');
const pc = require('picocolors')
const mdlinks = require('../index.js');

jest.mock('axios')

// jest.mock('axios' , () => {
//   get: jest.fn( () => Promise.resolve({}))
// })

// beforeEach(() => {
//   axios.get.mockClear()
// })


describe('my file system functions', () => {

  it('should check if path exists', () => {

    expect(aux.pathExist(bar.path)).toBeTruthy()
  });
  //   const object = {
  //     'dev': expect.any(Number),
  //     'mode': expect.any(Number),
  //     'nlink': expect.any(Number),
  //     'uid': expect.any(Number),
  //   }

  //   expect(aux.pathStat(path)).toHaveBeenCalledWith(expect.objectContaining(object))
  // });

  it('should check if path is absolute', () => {

    expect(aux.isAbsolute(bar.path)).toBeTruthy()
  });

  it('should convert relative path to absolute', () => {

    expect(aux.isAbsolute(bar.relative)).toBeTruthy()
  });

  it('should verify that a path is markdown', () => {

    expect(aux.isMarkdown(bar.path)).toBeTruthy()
  });

  //test de KNOWDOCS (Recursiva)
  it('should red all files in a directory', () => {
    const dir = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir'
    // const files = [
    //   '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaDos.md', '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebajs.js',
    //   '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaUno.md'
    // ]
    const expectedMd = ['/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaDos.md', '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaUno.md'];
    const result = aux.knowDocs(dir,[])

    expect(result).toStrictEqual(expectedMd)
    
  });

  it('should return links in a file', () => {
    
    expect(aux.readingFile(bar.path)).toEqual(expect.arrayContaining(bar.array))
  });

});

//TEST DE FUNCION QUE LLAMA A AXIOS
describe('validateLink', () => {


  it('should be a function', () => {
    expect(typeof aux.validateLink).toBe('function')
  });
  it('should call axios', () => {
    aux.validateLink(bar.array)
    // expect(aux.validateLink()).toHaveBeenCalled()
    
    //expect(aux.validateLink).toHaveBeenCalledWith(bar.array)

    expect(axios.get).toHaveBeenCalled()
    
  });

  it('should return an iterable object', () => {
    axios.get.mockImplementation( () => new Promise(() => {}))
    const response = aux.validateLink(bar.links)

    console.log(response) //status es undefined
    expect(response).toEqual(bar.validate)
    axios.get.mockReset()
  })
  })

describe('resolvePromise', () => {

  it('should resolve axios promise', async () => {
    const data = [{
      text: 'Mensajes HTTP - MDN',
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
    status: 200,
    stsText: 'OK'
    }]

    const resolved = [{
      text: 'Mensajes HTTP - MDN',
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
    status: new Promise((resolve, reject) => {
      resolve({
        status: 200,
        statusText: 'OK'
      })
    })
    }]

    const response = await aux.resolvePromise(resolved)
    expect(response).toEqual(data)
  });


});