import status from "http-status"
import { db } from "../src/database.js"
import { ObjectId } from "mongodb"

export async function putTransiction(req,res) {
    const transactionId = req.params.transactionId
    try{
    await db.collection('transactions').updateOne({_id : new ObjectId(transactionId)},{$set: { value: req.body.value, description: req.body.description, type: req.body.type }})
    return res.sendStatus(status.NO_CONTENT)
    }
    catch{
    return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
}