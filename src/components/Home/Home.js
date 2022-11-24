import "./Home.css"

import "../FeatureCard/FeatureCard";
import FeatureCard from "../FeatureCard/FeatureCard";

const Home = (props) =>{
    return(
        <>
            <div className="home__header">

            </div>
            <div className="home__over">
                <div className="home__oversection1">
                    <h2>Over Callizione</h2>
                    <p>Een tekst waarom jij Callizione zou moeten gebruiken </p>
                </div>
                <div className="home__oversection2">
                    
                </div>
            </div>
            <section className="home__features">
                <h2>Onze Features</h2>
                <div className="home__featureCards">
                <FeatureCard featureName="PC builder" featureInformation="lorem ipsum lorem ipsum lorem ipsum"/>
                <FeatureCard featureName="PC builder" featureInformation="lorem ipsum lorem ipsum lorem ipsum"/>
                <FeatureCard featureName="PC builder" featureInformation="lorem ipsum lorem ipsum lorem ipsum"/>
                <FeatureCard featureName="PC builder" featureInformation="lorem ipsum lorem ipsum lorem ipsum"/>
                </div>
            </section>
            <div className="home__prijs">

            </div>
            <div className="home__contact">

            </div>
        </>
    )
}

export default Home;