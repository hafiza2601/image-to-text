import Tesseract from 'tesseract.js';

export const extractTextAndBoldWords = async (imageBuffer) => {
    try {
        const { data: { text } } = await Tesseract.recognize(imageBuffer, 'eng');
        return { extractedText: text };
    } catch (error) {
        console.error('OCR extraction error:', error);
        throw error;
    }
};
