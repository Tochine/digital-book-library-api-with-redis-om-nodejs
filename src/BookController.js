import { BookRepository } from './BookEntity.js';

export default class BookController {
    static store = async (req, res, next) => {
        try {
            const book = await BookRepository.createAndSave(req.body);
    
            return res.send({
                status: "successful",
                data: book
            }, 201)
        } catch (error) {
            return next(error)
        }
    }

    static getBook = async (req, res, next) => {
        try {
            const book = await BookRepository.fetch(req.params.id)
            return res.send({
                status: "successful",
                data: book
            })
        }catch (error) {
            return next(error)
        }
    }

    static update = async (req, res, next) => {
        try {
            const book = await BookRepository.fetch(req.params.id);
            book.title = req.body.title;
            book.author = req.body.author;
            book.pages = req.body.pages;
            book.publisher = req.body.publisher;
            book.publishedDate = req.body.publishedDate;
            await BookRepository.save(book);

            return res.send({
                status: "successful",
                data: book
            })
        } catch (error) {
            return next(error)
        }
    }

    static delete = async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await BookRepository.remove(id);
    
            return res.send({
                status: "successful",
            }, 200)
        } catch (error) {
            return next(error)
        } 
    }
}