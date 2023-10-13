import { db } from "./connectDB.js";
import { ObjectId } from "mongodb";

const storeColl = db.collection('stores')

const ourStore = {
    storeName: "Old Navy",
    location: "Miami",
    hours: "9-9",
    mall: true,
    boutique: true,
}

export async function addAStore(){
    const storeAdded = await storeColl.insertOne(ourStore)
    console.log('Store added --->', storeAdded)
}

export async function getAllStores(){
    const getStores = await storeColl.find({}).toArray()
    console.table(getStores)
}

export async function getStoreById(){
    const storeId = new ObjectId('65296e5b199eeb1339489529')
    const storeById = await storeColl.findOne({_id: storeId})
    console.table( storeById)
}