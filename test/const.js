const path = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md';
const relative = 'prueba.md';
const dirPath = '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/dir'
const array = [
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
        status: new Promise(() => {})
    },
    {
        text: 'Mensajes HTTP - MDN',
        href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
        status: new Promise(() => {})
    },
    {
        text: 'Markdown',
        href: 'https://es.wikipedia.org/wiki/Markdown',
        file: '/Users/esthefaniagv/Desktop/mdlink/DEV008-md-links/prueba.md',
        status: new Promise(() => {})
    }
                ]

                module.exports = {
                    path,
                    relative,
                    array,
                    links,
                    validate
                }