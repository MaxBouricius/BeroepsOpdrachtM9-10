import "./PriceCard.css"

const PriceCard = (props) => {
    console.log(props.features)
    console.t
    return (
        <>
            <article className="priceCard">
                <h3>{props.priceCardTitle}</h3>
                {props.features.map((feature) => (
                    <div className="user">{feature}</div>
                ))}
            </article>
        </>
    )
}

export default PriceCard;