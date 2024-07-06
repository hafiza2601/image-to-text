// import path from "path"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extented: false, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import ocrRouter from './routes/ocr.routes.js'

//routes decelaration
app.use("/api/v1", ocrRouter)

export { app }