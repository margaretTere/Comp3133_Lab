const fs = require('fs');
const csv = require('csv-parser');

const inputFile = './input_countries.csv';
const canadaFile = './canada.txt';
const usaFile = './usa.txt';



if (fs.existsSync(canadaFile)) fs.unlinkSync(canadaFile);
if (fs.existsSync(usaFile)) fs.unlinkSync(usaFile);


const canadaStream = fs.createWriteStream(canadaFile);
const usaStream = fs.createWriteStream(usaFile);




fs.createReadStream(inputFile)
  .pipe(csv())
  .on('headers', (headers) => {
    let header = `${headers.join(',')}\r\n`;
    
    
    canadaStream.write(header);
    usaStream.write(header);


  })
  .on('data', (row) =>{
    if (row.country.toLowerCase() === 'canada') {
      canadaStream.write(`${row.country},${row.year},${row.population}\n`);
    } else if (row.country.toLowerCase() === 'united states') {
      usaStream.write(`${row.country},${row.year},${row.population}\n`);
    }
  })
    

  .on('end', () => {
    console.log('Processing successfully.');
    canadaStream.end();
    usaStream.end();
  })
  .on('error', (err) => {
    console.error('CSV reading error:', err.message);
  });
