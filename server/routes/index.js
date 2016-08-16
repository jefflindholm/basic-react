const fs = require('fs');

module.exports = (app) => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file.indexOf('route.js') === -1) return;
        const name = file.substr(0, file.indexOf('.'));
        const route = name.substr(0, name.indexOf('-route'));
        const router = require(`./${name}`); // eslint-disable-line global-require
        app.use(`/${route}`, router);
    });
};
