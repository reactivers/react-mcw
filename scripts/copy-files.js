/* eslint-disable no-console */
var fse = require("fs-extra");

Promise.all([
        'index.scss',
        'FabMenu/FabMenu.css',
    ].map((file) => copyFile(file))
);

function copyFile(file) {
    return new Promise((resolve) => {
        fse.copy(
            './src/' + file,
            './lib/' + file,
            (err) => {
                if (err) throw err;
                resolve();
            }
        );
    })
        .then(() => console.log(`Copied ${file}`));
};
