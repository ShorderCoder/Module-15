import { jw_time,jw_tok } from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken = (email) =>{
    const KEY =jw_tok;
    const EXPIRE ={expiresIn: jw_time};
    const PAYLOAD ={email};
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}
export const DecodeToken=(token)=>{
    try{
        return jwt.verify(token.jw_tok)
    }catch(e){
        return null;
    }
}
