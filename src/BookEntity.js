import { Entity, Schema } from 'redis-om';
import DBConnection  from './connection.js'

export class Book extends Entity {}

const BookSchema = new Schema(Book, {
    title: { type: 'string' },
    author: { type: 'string' },
    pages: { type: 'number' },
    publisher: { type: 'string' },
    publishedDate: { type: 'date' },
},{
    dataStructure: 'JSON'
});

export const BookRepository = DBConnection.fetchRepository(BookSchema)
await BookRepository.createIndex()
