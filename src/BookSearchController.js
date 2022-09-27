import { BookRepository } from './BookEntity.js';

export default class BookSearchController {
    static findAll = async (req, res) => {
        const result = await BookRepository.search().return.all()
        return res.json(result)
    }

    static findByAuthor = async (req, res) => {
        const result = await BookRepository.search().where('author').equals('Charles Dickens').return.all()
        return res.json(result);
    }

    static findByYear = async (req, res) => {
        const result = await BookRepository.search().where('publishedDate').eq(2022).return.all()
        return res.json(result)
    }

    static findFirstRecord = async (req, res) => {
        const result  = await BookRepository.search().return.first()
        return res.json(result)
    }

    static countAll = async (req, res) => {
        const result = await BookRepository.search().return.count()
        return res.json(result)
    }
}