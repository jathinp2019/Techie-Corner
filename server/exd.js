const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/';
const dbName = 'exp';

// Create a new MongoClient
const client = new MongoClient(url);

// Define the document query
const query = { name: 'ege' };

// Connect to the MongoDB cluster
async function retrieveDocument() {
  try {
    await client.connect();
    console.log('Connected to the MongoDB cluster');

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection('users');

    // Retrieve the document
    const document = await collection.findOne(query);
    console.log('Retrieved Document:', document);
  } catch (err) {
    console.log('Error:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Disconnected from the MongoDB cluster');
  }
}

// Call the retrieveDocument function
retrieveDocument();