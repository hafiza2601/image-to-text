import mongoose from 'mongoose';

const OcrSchema = new mongoose.Schema({
    imageBase64: {
        type: String,
    },
    extractedText: {
        type: String,
    },
}, { timestamps: true });

const ocrModel = mongoose.model('Image', OcrSchema);
export default ocrModel;

