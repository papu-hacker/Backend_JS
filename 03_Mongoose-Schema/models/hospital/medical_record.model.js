import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        diagnosis: {
            type: String,
            required: true
        },
        treatment: [{
            type: String
        }],
        doctor: {
            type: String
        },
        visitDate: {
            type: Date,
            default: Date.now
        },
        notes: {
            type: String
        },
        tests: [{
            testName: String,
            result: String,
            date: {
                type: Date,
                default: Date.now
            }
        }]
    },
    { timestamps: true });

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
