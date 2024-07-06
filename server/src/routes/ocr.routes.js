import { Router } from "express";
import { uploadBase64 } from "../controllers/ocr.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route("/upload").post(upload.single("ocrImage"), uploadBase64)

export default router