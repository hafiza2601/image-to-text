import { Router } from "express";
import { uploadImage } from "../controllers/ocr.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route("/upload").post(upload.single("ocrImage"), uploadImage)

export default router