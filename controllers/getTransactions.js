import status from "http-status"
import { db } from "../src/database.js"
import { ObjectId } from "mongodb"

export async function getTransaction(req,res) {
    const userId = res.locals.userId
    let page = 1
    
    if (req.query.page){
        page = req.query.page
    }
    if (req.query.page <= 0){
        return res.sendStatus(status.BAD_REQUEST)
    }
    const skip = (page - 1) * 10

    
    try{
        const transactions = await db.collection('transactions')
        .find({userId: new ObjectId(userId)})
        .skip(skip)
        .limit(10)
        .sort({ date: -1 })
        .toArray()
        return res.status(status.OK).send(transactions)
    }
    catch{
        return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
}