import mongoose from "mongoose"



const connection =async()=>{
    const URL = `mongodb://user:12345@ac-mnstkxt-shard-00-00.4x6yrnh.mongodb.net:27017,ac-mnstkxt-shard-00-01.4x6yrnh.mongodb.net:27017,ac-mnstkxt-shard-00-02.4x6yrnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-v1nqjy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    mongoose.set('strictQuery',false)

    try{
      await  mongoose.connect(URL, { useNewUrlParser : false });
      console.log('Databse connected successfully')
    }catch(error){
        console.log('error while connecting with database', error );
    }
} 

export default connection;