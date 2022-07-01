
const mongoose = require("mongoose");

function connect(){ 
     //mongoose.createConnection("mongodb://localhost:27017/IMDBMoviesDatabase",{useNewUrlParser: true, useUnifiedTopology: true});
    //mongodb://localhost:27017/IMDBMoviesDatabase
   //const connectionString ='mongdb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}'
    const connectionString ="mongodb://localhost:27017/IMDBMoviesDatabase";
    const options = {useNewUrlParser: true, useUnifiedTopology: true};
    return new Promise((resolve,reject)=>{
        mongoose.connect(connectionString,options,(err,db)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(db);
        })
     }); 
}
(async()=>{
    try{
        const db = await connect();
        console.log("connected to IMDBMoviesDatabase");
    }
    catch(err)
    {
        console.error(err);
    }
})();

