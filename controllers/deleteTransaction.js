import { db } from "../src/database.js";
import { ObjectId } from "mongodb";
import status from "http-status";

export async function deleteTransaction(req,res) {
    const transactionId = req.params.transactionId

    try{
    await db.collection('transactions').deleteOne({_id: new ObjectId(transactionId)})
    return res.sendStatus(status.NO_CONTENT)
    }
    catch{
      return  res.sendStatus(status.INTERNAL_SERVER_ERROR) 
    }
}