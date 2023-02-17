import mongoose from "mongoose"



const connection =async(username,password)=>{
    const URL = `mongodb://user:12345@ac-mmmrmzu-shard-00-00.fzzajua.mongodb.net:27017,ac-mmmrmzu-shard-00-01.fzzajua.mongodb.net:27017,ac-mmmrmzu-shard-00-02.fzzajua.mongodb.net:27017/?ssl=true&replicaSet=atlas-ag09d0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    mongoose.set('strictQuery',false)

    try{
      await  mongoose.connect(URL, { useNewUrlParser : false });
      console.log('Database connected successfully')
    }catch(error){
        console.log('error while connecting with database', error );
    }
} 

export default connection;