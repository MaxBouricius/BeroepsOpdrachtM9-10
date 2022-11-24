import "./FeatureCard.css"

const FeatureCard = (props) =>{
    return(
        <>
        <article className="feature">
        <img src="" alt="" />
        <h3 className="feature__name">{props.featureName}</h3>
        <p className="feature__info">{props.featureInformation}</p>
        </article>
        </>
    )
}

export default FeatureCard;