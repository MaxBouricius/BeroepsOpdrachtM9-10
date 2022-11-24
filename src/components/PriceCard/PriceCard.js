import "./PriceCard.css"

const PriceCard = (props) => {
    return (
        <>
            <article className="priceCard">
                <h3>{props.priceCardTitle}</h3>
                
            </article>
        </>
    )
}

export default PriceCard;