import fs from 'fs';

let data = fs.readdirSync(__dirname, 'utf-8');

console.log(data)