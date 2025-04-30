import mongoose from "mongoose";
// console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
const MONGODB_URI = "YOUR_URI"
const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
