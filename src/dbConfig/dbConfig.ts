import mongoose from 'mongoose';
import mongoos from 'mongoose';

export async function connect() {
    try {
        mongoos.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('moongoos connection established');
        });

        connection.on('error', (err) => {
            console.log('moongoos connection error. please make sure MongoDB is running' + err);
            process.exit(); 
        })
        
    } catch (error) {
        console.log('something went wrong!');
        console.log(error);
    }

}
        