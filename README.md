# Image Text Extraction Application

This project is a full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that facilitates image uploading from the frontend, followed by sending the uploaded image to the backend via an API. The uploaded images contain text content, and the backend extracts all text content from the image using an OCR service. The extracted text and image in base64 format are stored within a MongoDB database.

## Live Demo

You can access the live application [here](https://image-to-text-frontend-seven.vercel.app/).

## Features

- Image uploading from the frontend.
- Text extraction from images using an OCR service on the backend.
- Storage of the extracted text and image in base64 format in a MongoDB database.
- Display of the uploaded image alongside the extracted text retrieved from the backend.

## Project Structure

The project is divided into two main parts:

1. **Client**: Contains the React frontend code.
2. **Server**: Contains the Node.js backend code.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or a MongoDB Atlas account)
- NPM or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hafiza2601/image-to-text.git
   cd image-to-text
