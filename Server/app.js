const express=require("express")
const mongoose=require("mongoose")

const MONGOURI = "mongodb+srv://abhinav:N3!6aMQf4mDf!9a@cluster0.oyr2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app=express();

require("./models/user")
mongoose.model("User")


app.use(express.json())

app.use(require('./routes/auth'))



mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("Connected to database")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error on connecting ", err);
})




app.listen(3000,()=>{
    console.log("Server is running on 3000");
})