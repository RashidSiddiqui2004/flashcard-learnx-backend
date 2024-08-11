
const db = require("../models/index")
const Card = db.flashcards;

const addFlashCard = async (req, res) => {

    let info = {
        title: req.body?.title,
        question: req.body?.question,
        answer: req.body?.answer,
        description: req.body?.description,
    }

    const card = await Card.create(info)
    res.status(200).send(card)
    console.log(card);
}

const getAllFlashCards = async (req, res) => {

    let allcards = await Card.findAll({});
    res.status(200).send({ "flashcards": allcards });
}


const getOneCard = async (req, res) => {
    let id = req.params.id
    let flashcard = await Card.findOne({ where: { id: id } })
    res.status(200).send(flashcard)
}

const editFlashCard = async (req, res) => {

    let id = req.params.id

    const new_flashcard = await Card.update(req.body, { where: { id: id } })

    res.status(200).send(new_flashcard)

}


const deleteFlashcard = async (req, res) => {

    let id = req.params.id
    await Card.destroy({ where: { id: id } })

    const new_cards = await Card.findAll({});

    return res.status(200).send({
        "message": "Flash Card is deleted!",
        "flashcards": new_cards,
    })
}


module.exports = {
    addFlashCard, getAllFlashCards, getOneCard, editFlashCard, deleteFlashcard
}



