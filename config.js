const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW3OqOhj9L3nFbrmp6ExnDiAC4gURUHtmPwSIGJGLISLY6X/fg7bTPpzd6eEpk4T1ray1vu8VZDkukYUaMHoFBcEVpKhd0qZAYASUy36PCOiACFIIRuBsFvx15Ynr7mlRlJvTMJeWG0+Y5ryTLpa5ombbueFuXnqc9AzeOqC4BCccfgNYFydxslPqAz4Za6tO56QwVKu37690W0ZTk7OG/o4bbv1rC9giQkxwFmvFAaWIwJOFGhti8jP6K30czY6Takqx5zJbrUq2K26iVbwVWQs2sXxPvVB7vWWM+c/oD6qeyPRvB80xs66iFqpchpOBtKrUyvBVR731tiaese5sLD/olzjOUGRGKKOYNj/WXZz4siBKM1muBuKeSeVjLDKiEljGeMKkuaKxpmsTneqC/DPiFoaCY8x5r+ceg1mKlztYLU/WUkmHpLva1XHmdY10WTob8Stxm3xkJfk/uvNzb5rUFV+hy84LfLYUeBOt59vqUHlHqgRIDmfClNEugvcz+guea47xbZ4sZZOrvGyRT4ZbY4aP1ybaNYsr9hrmbJhjyWM/6UN6Id+xnIha2DWmUT7wl2I/qnCmo7lPiO06ItroQXFqXIq4GAlZkta+yRhNafdjF/qsUFdcTIcunEwK/VjvSFCzudalN3x9vr8oQY0ZgRH31gEExbikBFKcZ/e9gdABMKrWKCSI3uUFsRTo2aZS4oVTy1Us3BqjXPTql2kfHrEzn04O+UBARzXolc+gAwqSh6gsUWTgkuakmaOyhDEqwejf3x2QoZo+jGvLCVwH7DEpqZddilMOow9XPw5hGOaXjK6bLFTbBSJgxH5uI0pxFpetjpcMkvCAK6QeIC3BaA9PJXrrgAhVOEQtHhjSGZ6qtHFiC00GNSenG+cat5QPefa4gvosQqwYPkXcYPgkwiB4Cri++MQFQ5GV4F6UhAHoAPzeM+0/f7UQ2+ZSM6qDrrCy6q3PTv+m+IyvCkpyt+GhPSIoAiNKLqgDAhgml8LNE5R9F+AZ002Osq4YThCdla4cBJqshZNsLn3BfXgKRq+fc0rNoxZv0ZvaA1XYgQ5I7xHE7ct5vieJQo9jhd5I+qf8dW1lhEXxK0O0RX2XvL0fIQrxqQQjoM76J1aUxtqMXPmA1XXZjGU1lsGnRR9Zf2RJF7Z9XVnHRTI4KDYTnyvbzK6NuzaY1TVb9Xf8WYFaoeS69vwfIGAETF481lagri7D5OyuGD7nPHuxHbOsRetjEanjdazW6wgqdQg3Rulu2FSwIrk7xxLdjW9G/cLdjAtR5cLpmmhDFmYyjp/bao+ofC0WLPfXnQIx02cvRnTbp4ky1+2NFhbmgBvm5yldkY2qr9RAmPrSpedx0yqwLdXtSbbjIzGy+cDdHZrIt9ZHPyY4hdZRfnThfQqc3qcvvvfH63uw9hjdh1kGW4O+t+Zrwtm3zheE9+H4lxQpDuWYQ+zl1stSXLnd3CK3ZirNE/bQTeZTdpkuzvHmYK2gcgBvb787oDhBus9JCkYAZhHJcQQ64ARLKn82qYtTVFKYFu0oEVmW43pDoQPSRi6KNYX0o7eB3H6WI4G3P18wBAH3BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





