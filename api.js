const express = require('express');
const { getPrices } = require('.');


const cors = require("cors")

const app = express();



app.use(cors());
const port = 3000;
;//yeni eklendi

let eskidatam="0";
let niteliklideger="";
 app.get('/api/prices',async (_,res)=>{
const data=await getPrices();

//const data= getPrices();
if ( data=="-" || data==undefined ){
  eskidatam="0";
 
}else{
  eskidatam=data;
  niteliklideger=eskidatam;
}
if(eskidatam==0){
  eskidatam= niteliklideger;

}


res.send(eskidatam)
 })
app.listen(port , () => console.log(`örnek prt${port}`))