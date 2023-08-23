if (validate) {
    md_links(path_file, { validate: true })
        .then((res) => {
            const unique_links = {};
            const broken_links = [];
            res.forEach((p) => {
                if (p.status >= 400) {
                    broken_links.push(p.status);
                }
                unique_links[p.href] = unique_links[p.href]
                    ? unique_links[p.href] + 1 : 1;
            })
            if (stats) {
                console.log(chalk.bold('Total:'), res.length);
                console.log(chalk.bold('Unique:'), Object.keys(unique_links).length);
                console.log(chalk.bold('Broken:'), broken_links.length);
            } 
        })
        .catch((err) => {
            console.log(err)})
        }