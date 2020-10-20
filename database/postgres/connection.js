const {Pool, Client} = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'reviews',
    password: 'emma18'
    //port:
});

pool.query('SELECT NOW()', (err, res) => {
  //console.log(err, res)
  pool.end()
})


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'reviews',
    password: 'emma18'
})
 //
client.connect()

client.query('select * from restaurants', (err, res) => {
  if(res){console.log(res.rows[0].name_of_restaurant);}
  //console.log(err, res)
  client.end()
})
