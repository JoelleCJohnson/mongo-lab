// import database from mongo & connection string from secrets.js
import { MongoClient } from "mongodb";
import { connectionString } from "./secrets.js";

//connect db and connection string and store as a new variable
const client = new MongoClient(connectionString)

//connect to database 
await client.connect()

//????????? WTF? v
export const db = client.db('MyFirstCluster');

//close client function
export async function closeClient() {
    await client.close()
}