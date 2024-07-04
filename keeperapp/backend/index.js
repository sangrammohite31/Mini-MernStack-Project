const express= require('express')
const cors = require('cors')
const mongoose  =require('mongoose')

const sch = require('./models')

const db = 'mongodb+srv://sangram31200431:eRKUPPUVPdkCLlDw@cluster0.dpxxpx3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app=express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
mongoose.connect(db).then(()=>{console.log("connected")}).catch(e=>console.log(e))
app.get('/api/getAll',async(req,res)=>{

   let keeper= await sch.find();
   let count = await sch.countDocuments();
  
res.send(keeper);
})

app.post("/api/addNew",async(req,res)=>{
    const {title,description}=req.body;
    let add = new sch({title:title,description:description});
    add = await add.save();
    let keeper= await sch.find();
    res.json({keeper})

    

})
app.post("/api/delete",async(req,res)=>{
     const{id}=req.body;
    await sch.deleteOne(  {_id:id});
   let other = await  sch.find();

   res.send({other});




})


app.listen(3000,()=>{
    console.log("Connected to port 3000")
})