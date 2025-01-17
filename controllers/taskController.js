import { DecodeToken,EncodeToken } from "../utility/token.js";

export const createTask = async(req,res)=>{
    return res.json({message:"Hello World"});
}
export const readTask = async(req,res)=>{
    return res.json({message:"I am post body"});
}

export const TokenEncode=async(req,res)=>{
    let result= EncodeToken("abcd@gmail.com")
    return res.json({token:result});

}
export const TokenDecode=async(req,res)=>{
    let result= DecodeToken(token,"SSD145254SWA4D")
    res.json({token:result});

}