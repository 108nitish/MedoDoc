import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    education: {
        type: String,
        required: true,
    },

    experience: {
        type: String,
        required: true,
    },

    specialization: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
},{ timestamp: true })

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;