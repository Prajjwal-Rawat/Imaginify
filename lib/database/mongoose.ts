import mongoose, {Mongoose} from "mongoose";

const MongoDbUrl = process.env.MONGODB_URL;


interface MongooseConnection { 
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async() => {
    if(cached.conn) return cached.conn;

    if(!MongoDbUrl) throw new Error('Missing MongoDb Url');

    cached.promise = cached.promise || mongoose.connect(MongoDbUrl,{
        dbName: "imaginify",
        bufferCommands: false
    });

    cached.conn = await cached.promise;

    return cached.conn;
}