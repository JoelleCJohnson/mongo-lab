import { addClothes, updateClothes, getAllClothes } from "./clothes.js";
import { closeClient } from "./connectDB.js";
import { addAStore, getAllStores, getStoreById } from "./stores.js";

/*
await addClothes()
await updateClothes()
await getAllClothes()
*/

// await addAStore()
// await getAllStores()
await getStoreById()

closeClient()