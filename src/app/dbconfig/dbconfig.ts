import { Console } from 'console';
import mongoose from 'mongoos';
import { CONFIG_FILES } from 'next/dist/shared/lib/constants';
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection =mongoose.connection;

        connection.on('connected',()=> {
            Console.log('MongoDB connected sucessfully');
        })

        connnection.on('error',(err)) => {
            console.log('mongoDB connnection error. please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('something went wrong!');
        console.log(error);
    }
}