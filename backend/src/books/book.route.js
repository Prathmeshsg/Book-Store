import express from 'express';
import {postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook} from './book.controller.js'

const router = express.Router();

router.post("/create-book", postABook)

router.get("/", getAllBooks)

router.get("/:id", getSingleBook)

router.put("/edit/:id", UpdateBook)

router.delete("/:id", deleteABook)

export default router