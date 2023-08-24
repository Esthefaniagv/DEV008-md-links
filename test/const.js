const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
const relative = 'prueba.md';
const expected = [
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    },
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    },
    {
        text: 'Markdown',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    }
]
const links = [
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    },
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    },
    {
        text: 'Markdown',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md'
    }
]

const validate = [
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
        // status: Promise { <pending> }
    }
]

module.exports = {
    path,
    relative,
    expected,
    links,
    validate
}