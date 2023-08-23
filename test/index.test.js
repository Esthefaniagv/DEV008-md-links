const aux = require('../aux.js');
const mdlinks = require('../index.js');


const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
const relative = 'prueba.md'

describe('my file system functions', () => {

  it('should check if path exists', () => {

    expect(aux.pathExist(path)).toBeTruthy()
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

    expect(aux.isAbsolute(path)).toBeTruthy()
  });

  it('should convert relative path to absolute', () => {

    expect(aux.isAbsolute(relative)).toBeTruthy()
  });

  it('should verify that a path is markdown', () => {

    expect(aux.isMarkdown(path)).toBeTruthy()
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
    const expected = [{
      text: 'como funcionan las promesas',
      href: 'https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/',
      file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    },
    {
      text: 'View the analytics docs',
      href: 'https://getanalytics.io/',
      file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    }]
    expect(aux.readingFile(path)).toEqual(expect.arrayContaining(expected))
  });

  // test de validatelink... solo agrega axios
  //test de resolve promise... 
});

describe('mdlinks', () => {

  it('should have been called with the correct path', () => {

    expect(aux.isMarkdown(path)).toBeTruthy()
  });
});
