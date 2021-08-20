const express = require('express');
const redis = require('redis');


const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});


app.get('/', (req, res) => {
    
    client.get('cherrycoke', (err, cherrycoke) => {
        res.send('Number of cherrycoke is ' + cherrycoke)
        client.set('cherrycoke', parseInt(cherrycoke) + 1);
    });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});