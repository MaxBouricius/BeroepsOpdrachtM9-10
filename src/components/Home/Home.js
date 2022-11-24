import "./Home.css"


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
                <h2 className="home__name">Onze Features</h2>
                <div className="home__featureCards">
                <FeatureCard featureName="PC builder" featureInformation="Gebruik onze geoptimaliseerde PC builder om uw nieuwe computer samen te stellen!"/>
                <FeatureCard featureName="24/7 tech support" featureInformation="Voor problemen met onze producten kunt u elk moment van de dag onze support center bellen!"/>
                <FeatureCard featureName="Laptop kiezer" featureInformation="Met onze laptop kiezer kunt u de beste laptop vinden voor wat u nodig heeft!"/>
                <FeatureCard featureName="Retour" featureInformation="Niet goed? geld terug, zolang het product nog functioneel is kunt u binnen 2 maanden een voledige refund krijgen!"/>
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