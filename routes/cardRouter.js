
const cardController = require("../controllers/cardController")

const cardRouter = require('express').Router()

cardRouter.post('/addFlashCard', cardController.addFlashCard)

cardRouter.get('/getAllFlashCards', cardController.getAllFlashCards)

cardRouter.post('/editFlashCard/:id', cardController.editFlashCard)

cardRouter.get('/deleteFlashCard/:id', cardController.deleteFlashcard)

module.exports = cardRouter;