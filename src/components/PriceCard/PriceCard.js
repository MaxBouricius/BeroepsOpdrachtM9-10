import "./PriceCard.css"

const PriceCard = (props) => {
    return (
        <>
            <article className="feature">
                <img src="/img/featureFoto.png" alt="featureFoto" />
                <h3 className="feature__name">{props.featureName}</h3>
                <p className="feature__info">{props.featureInformation}</p>
            </article>
        </>
    )
}

export default PriceCard;