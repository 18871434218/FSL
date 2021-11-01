const util = require('util');

function fn() {
    return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    let flag = (err && err.hasOwnProperty('reason') && err.reason === null);
    console.log('flag', flag);
});