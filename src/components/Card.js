const Card = ({ myImage, boldHeader, smallHeader, lesson }) => {
    return (
        <div className="card">
            <img src={myImage} alt="Описание изображения" className="card-image" />
            <div className="card-content">
                <p className="card-lesson">{lesson}</p>
                <h2 className="card-title">{boldHeader}</h2>
                <h3 className="card-subtitle">{smallHeader}</h3>
            </div>
        </div>
    );
}

export default Card;
