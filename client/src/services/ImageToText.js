import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

class ImageToTextService {
    static async uploadImage(file) {
        try {
            const formData = new FormData();
            formData.append('ocrImage', file);
            const response = await axios.post(`${apiUrl}/api/v1/upload`, formData);
            console.log("response", response)
            return response?.data?.extractedText;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };
}

export default ImageToTextService
