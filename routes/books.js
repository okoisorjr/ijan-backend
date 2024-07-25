const router = require("express").Router();
const booksController = require("../controllers/bookstore");

router.get("/list_books/:user_id", booksController.list_my_books);
router.post("/add_book", booksController.add_book);
router.put("/:book_id/update_book/:user_id", booksController.update_book);
router.delete("/:book_id/delete/:user_id", booksController.delete_book);
router.get("/list_books", booksController.list_all_books);

module.exports = router;
