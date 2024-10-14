import mongoose from "mongoose";


const { DB_USER, DB_PWD, DB_CLUSTER, } = process.env;
const URI = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_CLUSTER}/test?retryWrites=true&w=majority`;

const DBConn = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        throw error;
    }
}

export default DBConn;
