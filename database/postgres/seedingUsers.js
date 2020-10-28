const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


lovedFor = ['family', 'evening', 'party', 'friends', 'meeting']

    writer.pipe(fs.createWriteStream('users.csv'));
    for (let i = 0; i < 2500; i++) {
      writer.write({


    id: i+1,
    avatar: 'Http://someadess.here123&&&&',
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    number_of_reviews: Math.ceil(Math.random()*100)%8,
    locale: 'yes/no'


      });
      if(i<1000){console.log(i+1 + ' records have been generated');}
      if(i%1000===0){console.log(i+1 + ' records have been generated');}
    }
    writer.end();
    console.log('generated users csv');