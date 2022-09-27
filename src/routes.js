import express, { Router } from 'express';
import BookController from './BookController.js';
import BookSearchController from './BookSearchController.js';

const router = express.Router();

router.post('/create', BookController.store)
router.get('/:id/book', BookController.getBook)
router.post('/:id/book', BookController.update)
router.delete('/:id/book', BookController.delete)

// search routes

router.get('/search/count', BookSearchController.countAll)
router.get('/search/all', BookSearchController.findAll)
router.get('/search/:author', BookSearchController.findByAuthor)
router.get('/search/:year', BookSearchController.findByYear)
router.get('/search', BookSearchController.findFirstRecord)


export default router;