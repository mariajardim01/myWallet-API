import status from "http-status"
import { db } from "../src/database.js"
import { ObjectId } from "mongodb"

export async function verifyUserTransaction(req,res,next) {
    const transactionId = req.params.transactionId
    try{
    const transaction = await db.collection('transactions').findOne({_id : new ObjectId(transactionId)})
    if (!transaction){
       return  res.sendStatus(status.NOT_FOUND)
    }
    if (transaction.userId != res.locals.userId){
      return  res.sendStatus(status.UNAUTHORIZED)
    }
    return next()
    }
    catch{
        return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
}