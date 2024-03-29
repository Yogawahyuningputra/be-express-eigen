import express from 'express'
import { borrowBooks, createBooks, getBooks } from '../controllers/books-controller.js'

const bookRoute = express.Router()
bookRoute.post('/books', createBooks)
bookRoute.get('/books', getBooks)
bookRoute.patch('/borrow', borrowBooks)
export { bookRoute }