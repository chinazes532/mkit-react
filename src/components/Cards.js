import React from "react";
import '../styles/Cards.css';

const Cards = () => {
    let cards = [
        {
            id: 1,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Вихлянцева Е. Ю.",
            smallHeader: "Английский",
            lesson: "ENG",
        },
        {
            id: 2,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Масленников В. А.",
            smallHeader: "Информатика",
            lesson: "IN",
        },
        {
            id: 3,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Бунина А. Ю.",
            smallHeader: "Математика",
            lesson: "AI",
        },
        {
            id: 4,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Костин А. П.",
            smallHeader: "Физическая культура",
            lesson: "PHS",
        },
        {
            id: 5,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Данные",
            smallHeader: "Данные",
            lesson: "ENG",
        },
        {
            id: 6,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Данные",
            smallHeader: "Данные",
            lesson: "ENG",
        },
        {
            id: 7,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Данные",
            smallHeader: "Данные",
            lesson: "ENG",
        },
        {
            id: 8,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Данные",
            smallHeader: "Данные",
            lesson: "ENG",
        },
        {
            id: 9,
            myImage: "https://img.freepik.com/premium-photo/black-texture_1154196-3073.jpg",
            boldHeader: "Данные",
            smallHeader: "Данные",
            lesson: "ENG",
        },
    ]

    return (
        <div className="cards-container">
            <h1>Домашнее задание</h1>
            <div className="cards-wrapper"> 
                {cards.map(card => (
                    <div className="card" key={card.id}> 
                        <img src={card.myImage} alt="Описание изображения" className="card-image" />
                        <div className="card-content">
                            <p className="card-lesson">{card.lesson}</p>
                            <h2 className="card-title">{card.boldHeader}</h2>
                            <h3 className="card-subtitle">{card.smallHeader}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Cards;