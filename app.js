const fs = require('fs');


fs.writeFile('./assets/js/nodeFile.txt','This is a sample text',err => {
    err ? console.log(err) : console.log('ok');
});