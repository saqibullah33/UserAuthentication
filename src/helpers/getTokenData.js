import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request ) => {
    try {
        const token = request.cookies.get("token")?.value || '';
       const tokensec='nextjsyoutube'
        const decodedToken= jwt.verify(token,tokensec);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }

}


