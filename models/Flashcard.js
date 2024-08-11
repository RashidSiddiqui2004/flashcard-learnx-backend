const { DataTypes } = require('sequelize');

const FlashCard = (sequelize) => {

    const FlashCardModel = sequelize.define("flashcard", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question: {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        answer: {
            type: DataTypes.TEXT,
        },
    });

    return FlashCardModel;
};

module.exports = FlashCard
