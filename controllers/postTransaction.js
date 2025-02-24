import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import status from "http-status"
import { db } from "../src/database.js"
import { ObjectId } from "mongodb"
import dayjs from "dayjs"

dotenv.config()
export async function postTransaction(req, res) {
    const userId = res.locals.userId
    
    
    const type = req.query.type
    if (type != "deposit" && type != "withdraw" ){
        return res.sendStatus(status.UNPROCESSABLE_ENTITY)
    }
    
    try{
    await db.collection('transactions').insertOne({...req.body, type: type, userId:new ObjectId( userId), date: dayjs().format('DD-MM-YYYY') })
    return res.sendStatus(status.CREATED)
    }
    catch{
       return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    } 
}