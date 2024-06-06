const mongoose=require('mongoose')

module.exports=mongoose.connect('').then(

    ()=>{
        console.log("Db connection successfull");
    }

).catch(
    (err)=>{
        console.log(err);
    }
)