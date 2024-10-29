import express from 'express';
import {postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook} from './book.controller.js'
import verifyAdminToken from '../middleware/verifyAdminToken.js';

const router = express.Router();

router.post("/create-book", verifyAdminToken, postABook)

router.get("/", getAllBooks)

router.get("/:id", getSingleBook)

router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook);

export default router