import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import ImageToTextService from '../services/ImageToText';
import './ImageToText.css';

const ImageToText = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [text, setText] = useState('Extracted text will appere here..');
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
            setLoading(true);
            try {
                const extractedText = await ImageToTextService.uploadImage(file);
                setText(extractedText);
            } catch (error) {
                console.error('Error extracting text:', error);
                setText('Error extracting text. Please try again.');
                setSelectedFile(null)
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (!selectedFile) {
            const file = event.dataTransfer.files[0];
            if (file) {
                handleFileChange({ target: { files: [file] } });
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        if (!selectedFile) {
            event.currentTarget.classList.add('drop-zone--over');
        }
    };

    const handleDragLeave = (event) => {
        if (!selectedFile) {
            event.currentTarget.classList.remove('drop-zone--over');
        }
    };

    const handleButtonClick = () => {
        if (!selectedFile) {
            document.getElementById('fileInput').click();
        }
    };

    const handleTryAnother = () => {
        setSelectedFile(null);
        setText('');
    };

    return (
        <div className="container">
            <div className="title">Image to Text Converter</div>
            <div className="description">Extract text from your images or screenshots with just a few clicks. Upload, Convert, and Copy.
            </div>
            <div className="box">
                <div
                    className={`left-section drop-zone ${selectedFile ? 'disabled' : ''}`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={handleButtonClick}
                >
                    {selectedFile ? (
                        <img src={selectedFile} alt="Uploaded" className="drop-zone__thumb" />
                    ) : (
                        <div className="upload-area">
                            <FontAwesomeIcon icon={faUpload} size="3x" />
                            <span className="drop-zone__prompt">Drop file here or click to upload</span>
                            <input
                                type="file"
                                id="fileInput"
                                className="drop-zone__input"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}
                </div>
                <div className="right-section">
                    <div className="text-container">
                        {loading ? 'Processing...' : text}
                    </div>
                    {selectedFile && !loading && (
                        <div className="buttons-container">
                            <button onClick={handleTryAnother}>Try Another</button>
                            <button onClick={() => navigator.clipboard.writeText(text)}>Copy Text</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageToText;
