#!/usr/bin/env node
const mdlinks = require('./index.js');
const pc = require('picocolors');

const path_file = process.argv[2];
const option = process.argv.slice(3); // separa los args (options)
const validate = option[0] === '--validate' || option[1] === '--validate';
const stats = option[0] === '--stats' || option[1] === '--stats';
// const help = option[0] === '--help' || option[1] === '--h';

if (path_file) {
    // si solo envia path
    if (option.length === 0) {
        mdlinks(path_file)
            .then((r) => {
                r.forEach((link) => {
                    console.log(pc.blue(link.href) + '  ' + pc.magenta(link.text) + '  ' + pc.white(link.file))
                })
            })
            .catch((e) => {
                console.log('Please introduce a correct path', pc.bgGreen('EXAMPLE : $ md-links ./some/example.md'))
            })
        //si envia path y existe validate
    } if (validate) {
        mdlinks(path_file, { validate: true })
            .then((res) => {
                const unique = {};
                const broken_links = [];
                res.forEach((p) => {
                    if (p.status >= 400) {
                        broken.push(p.status);
                    }
                    unique[p.href] = unique[p.href]
                        ? unique[p.href] + 1 : 1;
                })
                if (stats) {
                    console.log(pc.underline('Get to know your links stats & validations:'))
                    console.log(pc.bgBlue('Total:'), res.length);
                    console.log(pc.bgBlue('Unique:'), Object.keys(unique).length);
                    console.log(pc.bgRed('Broken:'), broken_links.length);
                } else {
                    res.forEach((link) => {
                        console.log(pc.blue(link.href) + '  ' + pc.magenta(link.text) + '  ' + pc.white(link.file) + '  ' + pc.yellow(link.status) + '  ' + pc.bgGreen(link.stsText))
                    })
                }
            })
            .catch((error) => console.error(error));
    } if (stats && !validate) {
        mdlinks(path_file, { stats: true })
            .then((links) => {
                let total = []
                links.forEach((p) => {
                    total.push(p.href)
                })
                let unique = new Set(total)
                console.log(pc.underline('Get to know your links stats :'))
                console.log(pc.bgBlue('Total:'), total.length)
                console.log(pc.bgBlue('Unique:'), unique.size)
            })
            .catch((error) => console.error(error));
    }
} else {
    console.error('Please introduce a correct format', pc.bgRed('EXAMPLE : $ md-links ./some/example.md'))
}
