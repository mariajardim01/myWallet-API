import jwt from "jsonwebtoken";
import status from "http-status";

export async function authValidation(req, res, next) {
    const authHeader = req.headers.token;

    if (!authHeader) {
        return res.sendStatus(status.UNAUTHORIZED); 
    }

    const token = authHeader.replace("Bearer ", "");

    jwt.verify(token, process.env.KEY, (error, decoded) => {
        if (error) {
            return res.sendStatus(status.UNAUTHORIZED);
        }
        res.locals.userId = decoded.userId
        next();
    });
}
