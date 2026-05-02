import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addreddLine1: {
        type: String,
        required: true
    },
    addreddLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    specializedIn: [
        {
            type: String
        }
    ]

}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hospitalSchema);
