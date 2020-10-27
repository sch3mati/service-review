const {Pool, Client} = require('pg');

// I'm not sure that we have to use pool at all
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'reviews',
//     password: 'emma18'
//     //port:
// });

// pool.query('', (err, res) => {
//   //console.log(err, res)
//   pool.end()
// })


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'reviews',
    password: 'emma18'
})
 //
 client.connect();

 const getReviewList = (req, callback) => {

  client.query('select * from review_list where id = '+ req, (err, res) => {
    console.log(req);

    if(res){res.rows.forEach(x=> console.log(x.id))}
    if(err){console.log(err)}
    callback(err,res);
    //console.log(err, res)
  })

}


const getRestaurants = (req, callback) => {

  client.query('select * from restaurants where id = '+ req, (err, res) => {
    console.log(req);

    if(res){res.rows.forEach(x=> console.log(x.id))}
    if(err){console.log(err)}
    callback(err,res);
    //console.log(err, res)
  })

}

const getAllUsers = (callback) => {

  client.query('select * from users', (err, res) => {
    //console.log(req);

    if(res){res.rows.forEach(x=> console.log(x.id))}
    if(err){console.log(err)}
    callback(err,res);
    //console.log(err, res)
  })

}



module.exports.getReviewList = getReviewList;
module.exports.getRestaurants = getRestaurants;
module.exports.getAllUsers = getAllUsers;