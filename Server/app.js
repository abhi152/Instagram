const express=require("express")
const mongoose=require("mongoose")

const MONGOURI = "mongodb+srv://abhinav:N3!6aMQf4mDf!9a@cluster0.oyr2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("Connected to database")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error on connecting ", err);
})


const app=express();

require("./models/user")

require("./models/post")



app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(5000,()=>{
    console.log("Server is running on 5000");
})

