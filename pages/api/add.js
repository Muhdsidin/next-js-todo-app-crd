import connectDB from "@/config.js/db"
import TodoModel from "@/models/Todo-Model";



export default async function handler(req, res) {
    try {
      await connectDB(); 
  
      if (req.method === 'POST') {
        const { input } = req.body; 
      
        const newTodo = await TodoModel.create({Todo:req.body.input})
        const fetch = await TodoModel.find();
  
        res.status(200).json(fetch);
      } else {
        res.status(405).end(); 
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }