import { createWorker } from 'tesseract.js';

export const extractTextAndBoldWords = async (imageBuffer) => {
    try {
        const worker = await createWorker('eng');
        console.log("worker", worker)
        const { data: { text } } = await worker.recognize(imageBuffer, {
            corePath: 'https://unpkg.com/tesseract.js-core@5.1.0/tesseract-core.wasm.js'
        });
        console.log("extracted data", text)
        await worker.terminate();
        return { extractedText: text };
    } catch (error) {
        console.error('OCR extraction error:', error);
        throw error;
    }
};
