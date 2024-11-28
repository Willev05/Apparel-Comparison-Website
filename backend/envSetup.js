const dotenv = require('dotenv');
dotenv.config();

const config = {
    DB_USER: process.env['DB_USER'],
    DB_PASS: process.env['DB_PASS'],
    REACT_APP_API_KEY: process.env['REACT_APP_API_KEY']
};
