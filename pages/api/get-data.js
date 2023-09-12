import connectDB from "@/config.js/db";
import TodoModel from "@/models/Todo-Model";
import { connect } from "mongoose";

export default async function handler(req,res){
    await connectDB()
    try {
        if(req.method === "GET"){
            const FetchAllData = await TodoModel.find()
            res.status(200).json(FetchAllData)
        }else{
            res.status(404).end()
        }
        
    } catch (error) {
        console.log(`error ${error}`)
        res.status(501).json({
            message:"THis is Server Issue Dont worry About This"
        })
    }
}