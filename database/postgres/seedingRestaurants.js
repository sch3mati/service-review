const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


lovedFor = ['family', 'evening', 'party', 'friends', 'meeting']

    writer.pipe(fs.createWriteStream('restaurants.csv'));
    for (let i = 0; i < 1000; i++) {
      writer.write({
    id: i + 1,
    name_of_restaurant: faker.name.firstName(),
    number_of_reviews: Math.ceil(Math.random()*1000)%20,
    rating_overall: Math.ceil(Math.random()*100)%5,
    rating_recent: Math.ceil(Math.random()*100)%5,
    rating_food: Math.ceil(Math.random()*100)%5,
    rating_service: Math.ceil(Math.random()*100)%5,
    rating_ambience: Math.ceil(Math.random()*100)%5,
    noise_level: Math.ceil(Math.random()*100)%10,
    would_recommend : Math.ceil(Math.random()*100)%5,
    percent_five_star : Math.ceil(Math.random()*100)%5,
    percent_four_star : Math.ceil(Math.random()*100)%5,
    percent_three_star : Math.ceil(Math.random()*100)%5,
    percent_two_star : Math.ceil(Math.random()*100)%5,
    percent_one_star : Math.ceil(Math.random()*100)%5,
    loved_for: lovedFor[Math.ceil(Math.random()*100)%4],
    filters: 'some'

      });
      if(i<1000){console.log(i+1 + ' records have been generated');}
      if(i%1000===0){console.log(i+1 + ' records have been generated');}
    }
    writer.end();
    console.log('generated restaurants csv');

