const bar = require('./const')
const axios = require('axios')
const aux = require('../aux.js');
const mdlinks = require('../index.js');

jest.mock('axios')

// beforeEach(() => {
//   axios.get.mockClear()
// })


describe('my file system functions', () => {

  it('should check if path exists', () => {

    expect(aux.pathExist(bar.path)).toBeTruthy()
  });

  // it('should return path stats', () => {
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
  // it('should red all files in a directory', () => {
  //   const dir = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir'
  //   const files = [
  //     '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaDos.md', '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebajs.js',
  //     '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaUno.md'
  //   ]
  //   const expectedMd = ['/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaDos.md', '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir/pruebaUno.md'];
  //   // expect(aux.knowDocs(path, [])).toBe(files)
  //   expect(dir).toEqual(files)
  //   expect(dir).toEqual(expect.arrayContaining(expectedMd))
    
  // });

  it('should return links in a file', () => {
    
    expect(aux.readingFile(bar.path)).toEqual(expect.arrayContaining(bar.expected))
  });

});

//TEST DE FUNCION QUE LLAMA A AXIOS
describe('validateLink', () => {

  it('should call axios', () => {
    aux.validateLink(expected)
    expect(axios).toHaveBeenCalled()
  });

  // test('success GET scenario', async () => {

  //   // asignamos comportamiento deseado para este test
  //   axios.get.mockResolvedValueOnce(Promise.resolve(expectedAxios))
  
  //   const response = await aux.validateLink(expected)
  
  //   // toEqual es mejor para comparar estructuras como objetos
  //   expect(response).toEqual(expectedAxios)
  // })

});

describe('resolvePromise', () => {

  it('should call axios', async () => {
    const data = [{
      text: 'Mensajes HTTP - MDN',
    href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
    file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
    status: Promise 
    }]

    axios.get.mockResolvedValueOnce( () => Promise.resolve(data))
    const response = await aux.resolvePromise(expected)
    console.log(response)
    expect(response).toEqual(data)
  });


});