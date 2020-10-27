const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'reviews', localDataCenter: 'datacenter1' });

client.connect((err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('connected to cassandra');
  }
});


client.execute ('select * from reviews_by_restaurant where id = 4444313 ALLOW FILTERING', function (err, result) {
  if (err) return console.error(err);
  console.log(result);
})

module.exports = client;