const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");


/// DEFAULT ROUTES ///
// Import controller modules.
router.get("/", book_controller.index);
router.get("/books", book_controller.book_list);
router.get("/authors", author_controller.author_list);

//BOOK ROUTES
router.route("/book/create")
  .get(book_controller.book_create_get)
  .post(book_controller.book_create_post);

router.route("/book/:id")
  .get(book_controller.book_detail);


router.route("/book/:id/update")
  .get(book_controller.book_update_get)
  .post(book_controller.book_update_post);

router.route("/book/:id/delete")
  .get(book_controller.book_delete_get)
  .post(book_controller.book_delete_post);


// AUTHOR ROUTES
router.route("/author/create")
  .get(author_controller.author_create_get)
  .post(author_controller.author_create_post);
router.route("/author/:id")
  .get(author_controller.author_detail);

router.route("/author/:id/update")
  .get(author_controller.author_update_get)
  .post(author_controller.author_update_post);

router.route("/author/:id/delete")
  .get(author_controller.author_delete_get)
  .post(author_controller.author_delete_post);

module.exports = router;