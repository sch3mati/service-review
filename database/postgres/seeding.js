const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();



    writer.pipe(fs.createWriteStream('reviews.csv'));
    for (let i = 0; i < 50; i++) {
      writer.write({
        id: i + 1,
        id_restaurants: Math.ceil(Math.random()*250000),
        partySize: Math.ceil(Math.random()*10),
        name: faker.name.findName(),
        text: faker.lorem.paragraph(),
        dateAndTime: faker.date.soon(90),
        phone: faker.phone.phoneNumberFormat(),
        timeSlots: Math.floor(Math.random()*5250000)
      });
      if(i%1000===0){console.log(i + ' records have been generated');}
    }
    writer.end();
    console.log('generated reviews csv');


