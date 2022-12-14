import "./PriceCard.css"
const PriceCard = (props) => {
    return (
        <>
            <article className="priceCard">
                <div className="priceCard__container">
                    <h3 className="priceCardtitle">{props.priceCardTitle}</h3>
                    {props.features.map((feature, index) => (
                            <article key={`feature-${index}`} className="priceCard__feature">
                                <i className="fa-regular fa-square-check priceCard__icon"></i>
                                <p>{feature.feature}</p>
                            </article>
                    ))}
                </div>
                <input className="priceCard__button" type="button" value="Subscribe!" />
            </article>

        </>
    )
}

export default PriceCard;