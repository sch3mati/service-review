const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


lovedFor = ['family', 'evening', 'party', 'friends', 'meeting']

    writer.pipe(fs.createWriteStream('reviews.csv'));
    for (let i = 0; i < 10000000; i++) {
      writer.write({
        id: i + 1,
    id_restaurants: Math.ceil(Math.random()*1000),
    id_user: Math.ceil(Math.random()*2500),
    create_date_month: Math.ceil(Math.random()*100)%12,
    create_date_day: Math.ceil(Math.random()*100)%31,
    create_date_year: Math.ceil(Math.random()*100)%10+ 2010,
    review_message: faker.lorem.paragraph(),
    rating_overall: Math.ceil(Math.random()*100)%5,
    rating_recent: Math.ceil(Math.random()*100)%5,
    rating_food:  Math.ceil(Math.random()*100)%5,
    rating_service:  Math.ceil(Math.random()*100)%5,
    rating_ambience:  Math.ceil(Math.random()*100)%5,
    noise_level:  Math.ceil(Math.random()*100)%10,
    would_recommend:  Math.ceil(Math.random()*100)%5,
    loved_for: lovedFor[Math.ceil(Math.random()*100)%4],
    filters: 'some'
      });
      //if(i<1000){console.log(i+1 + ' records have been generated');}
      if(i%100000===0){console.log(i + ' records have been generated');}
    }
    writer.end();
    console.log('generated reviews csv');

