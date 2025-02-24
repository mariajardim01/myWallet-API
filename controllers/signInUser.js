import status from "http-status"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { db } from "../src/database.js"
import bcrypt from "bcrypt"

dotenv.config()

export async function signInUser(req,res) {

    try{
        const user = await db.collection('users').findOne({email: req.body.email})
        if (!user){
            return res.sendStatus(status.NOT_FOUND)
        }
        if (!bcrypt.compareSync(req.body.password, user.password)){
            return res.sendStatus(status.NOT_FOUND)
        }
        const token = jwt.sign({userId: user._id}, process.env.KEY ,{ expiresIn: 7200 })
        return res.status(status.OK).send({user: user._id, token: token})

    }
    catch{
         return res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }

    
    
}