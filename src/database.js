import dotenv from "dotenv"
import { MongoClient } from "mongodb"

dotenv.config()
console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL); // Teste

const mongoClient = new MongoClient(process.env.DATABASE_URL)
try{
   await mongoClient.connect()
   console.log("success database connection")


}
catch{
    console.log("connection error")

}

export const db = mongoClient.db() 