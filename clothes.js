import { db } from "./connectDB.js";
import { ObjectId } from "mongodb";

const clothesColl = db.collection('clothes')

//create a clothing object
const ourClothes = {
    productName: 'Gucci Shirt',
    size: 'M',
    color: 'Green',
    inStock: false,
    stars: 4,
}

//add to db
export async function addClothes() {
    const addItem = await clothesColl.insertOne(ourClothes)
    console.log('Item added ---->:', addItem)
}

//get all items
 export async function getAllClothes(){
    const getClothes = await clothesColl.find({}).toArray()
    console.table(getClothes)
 }

//update all items
export async function updateClothes(){
    const itemId = new ObjectId('652962a6d6ee91d2a2b62941')
    const updatedClothes = await clothesColl.findOneAndUpdate({ _id: itemId }, { $set: { color: 'red' }})
    console.log('Updated clothes--->', updatedClothes)
}