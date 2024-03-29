import { prismaClient } from "../applications/database.js"
import { ResponseError } from "../error/response-error.js"
import { createBooksValidation, getBooksValidation } from "../validation/books-validation.js"
import { validate } from "../validation/validation.js"

const create = async (request) => {
    const book = validate(createBooksValidation, request)
    const isExist = await prismaClient.book.count({
        where: {
            code: book.code
        }

    })
    if (isExist === 1) {
        new ResponseError(400, 'books already exists')
    }

    const result = await prismaClient.book.create({
        data: book,
        select: {
            code: true,
            title: true,
            author: true,
            stock: true
        }
    })
    return result
}
const get = async (code) => {
    const book = await prismaClient.book.findMany({
        select: {
            code: true,
            title: true,
            author: true,
            stock: true
        }
    })
    if (!book) {
        throw new ResponseError(404, "books not found")
    }
    return book
}
const borrowBook = async (bookCode, memberCode) => {
    const book = await prismaClient.book.findUnique({
        where: {
            code: bookCode
        }
    })
    if (!book || book.stock == 0) {
        throw new ResponseError(400, " buku tidak tersedia")
    }
    const countBorrowBook = await prismaClient.book.count({
        where: {
            code: memberCode
        }
    })

    const maxBorrow = 2
    if (countBorrowBook >= maxBorrow) {
        throw new ResponseError(400, 'gagal, limit pinjam buku habis')
    }

    const result = await prismaClient.book.update({
        where: {
            code: bookCode
        },
        data: {
            stock: book.stock - 1,
            code: memberCode
        }
    })
    return result

}


export default { create, get, borrowBook }