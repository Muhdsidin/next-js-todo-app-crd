// db.js

const { default: mongoose, Mongoose } = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://bsidin79:<JMLqRDaP9BbdlUlx>@todo.lr9t6v0.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
