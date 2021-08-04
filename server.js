'use strict';
const express = require ('express');
const cors = require ('cors');
const mongoose =require('mongoose');
const {default : axios} =require ('axios');

require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT;

mongoose.connect('mongodb://talhajjaj:gFpcAUKqc86EdpSG@cluster0-shard-00-00.7hlt9.mongodb.net:27017,cluster0-shard-00-01.7hlt9.mongodb.net:27017,cluster0-shard-00-02.7hlt9.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-87ev1i-shard-0&authSource=admin&retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = newMod;
app.listen.PORT=()=>{
    console.log(`listening to PORT ${PORT}`)
}




app.get('/home', (res,req)=()=>{
    console.log('its work')
})

app.get ('/apiData',(res,req)=()=>{
    if (error){
        return console.log("error")
     }else{
        return 
        console.log('done')}
    }

)

async function apiData (){

    const url="https://ltuc-asac-api.herokuapp.com/allColorData"
    const userEmail=[userDataSchema]
}


let ColorSchema = new mongoose.Schema({
 

color:{
    userName:String,
    imageUrl:String
    },
  });

  let userDataSchema= new mongoose.Schema({
      userEmail:String,
      userData=[ColorSchema]
  })

function seedingColor(){
const taima = mongoose.model(
userEmail='taima.hajaj@gmail.com',
color={
    userName: "ninjascience",
    imageUrl: "http://www.colourlovers.com/img/000000/100/100/Black.png",
},
)
{
const razan = mongoose.model(
userEmail='quraanrazan282@gmail.com',
color={
userName: "Skyblue2u",
imageUrl: "http://www.colourlovers.com/img/1693A5/100/100/dutch_teal.png",


}
)
}
taima.save();
razan.save();
seedingColor();


app.get ('/addData',(res,req,index)=()=>{
let apiData=req.body;
const newColor= new color_model();
newColor.save()

})

app.get ('/updateData',(res,req)=()=>{

})

app.get ('/deleteData',(res,req)=()=>{

})
}