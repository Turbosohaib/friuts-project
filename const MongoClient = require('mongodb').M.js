const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'FruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

async function run() {
    // Use connect method to connect to the Server
    await client.connect();
    
    // Establish and verify connection
    // const dbs = await client.db(dbName).admin().listDatabases({
    //     nameOnly: true
    // });

    const sohaibCallback = (err, results) => {
        console.log(results);

        client.close();
    };

    client.db(dbName).admin().listDatabases({
        nameOnly: true
    }, sohaibCallback);

    //console.log(dbs);

    console.log("Connected successfully to server");

    // Ensures that the client will close when you finish/error
    //await client.close();
}

run().catch(console.dir);
// function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
  
//     const db = client.db(dbName);
  
//     client.close();
//   }
