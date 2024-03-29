import booksService from "../services/books-service.js"

const createBooks = async (req, res, next) => {
    try {
        const result = await booksService.create(req.body)
        res.status(201).json({ message: 'buku berhasil di input', data: result })
    } catch (error) {
        next(error)
    }
}
const getBooks = async (req, res, next) => {
    try {
        const result = await booksService.get()
        res.status(200).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const borrowBooks = async (req, res, next) => {
    try {
        const result = await booksService.borrowBook(req.body)
        res.status(200).json({ message: 'pinjam buku berhasil', data: result })
    } catch (error) {
        next(error)
        console.log("error pinjam buku");
    }
}
export { createBooks, getBooks, borrowBooks }