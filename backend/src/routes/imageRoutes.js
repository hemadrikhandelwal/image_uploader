import express from "express";
import upload from '../middleware/upload.js';
import cloudinary from '../config/cloudinary.js';
import pool from '../config/db.js'
import { deleteImageController, getAllImageController, uploadImageController } from "../controllers/imageController.js";



const router = express.Router();

router.post(
    "/upload",
    upload.single("image"),
    uploadImageController
);

router.get(
    "/allimages",
    getAllImageController

)

router.delete(
    "/:id",
    deleteImageController
)


export default router