import { createWorker } from 'tesseract.js';

export const extractTextAndBoldWords = async (imageBuffer) => {
    try {
        const worker = await createWorker('eng');
        const { data: { text } } = await worker.recognize(imageBuffer);
        await worker.terminate();
        return { extractedText: text };
    } catch (error) {
        console.error('OCR extraction error:', error);
        throw error;
    }
};
