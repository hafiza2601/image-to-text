import Tesseract from "tesseract.js"

const uploadImage = async (req, res) => {
    console.log(req.file)

    // Perform OCR
    const { data: { text } } = await Tesseract.recognize(req.file.path, 'eng');
    res.status(200).json({
        text
    })
}

export { uploadImage }