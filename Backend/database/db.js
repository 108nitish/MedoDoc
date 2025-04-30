import mongoose from "mongoose";
// console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
const MONGODB_URI = "mongodb+srv://bachewarbhushan:t0u9fJRCDo2bklwx@cluster0.iogqgw0.mongodb.net/med-assist?retryWrites=true&w=majority"
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;