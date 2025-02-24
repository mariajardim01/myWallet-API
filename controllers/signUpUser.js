
import status from "http-status"
import { db } from "../src/database.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"

dotenv.config()

export async function signUpUser(req,res) {
    const email = req.body.email

    try{

    const userOnDatabase = await db.collection('users').findOne({email: email})
    if (userOnDatabase){
        return res.sendStatus(status.CONFLICT)
    }
    
    await db.collection('users').insertOne({...req.body,password: bcrypt.hashSync(req.body.password, 10)})
    
    return res.sendStatus(status.CREATED)
    

    }
    catch{
    return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
    
    
}