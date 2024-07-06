import { extractTextAndBoldWords } from "../utils/ocrService.js";
import ocrModel from "../models/ocr.model.js";


const uploadBase64 = async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const imageBase64 = imageBuffer.toString('base64');
        const { extractedText } = await extractTextAndBoldWords(imageBuffer);

        const newImage = new ocrModel({
            imageBase64,
            extractedText,
        });

        await newImage.save();
        res.status(201).json({
            message: 'Image uploaded and extracted text from the Image.',
            extractedText,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error while extracting text from Image',
            error
        });
    }
}

export {
    uploadBase64
}