import "./Home.css"


import FeatureCard from "../FeatureCard/FeatureCard";
import PriceCard from "../PriceCard/PriceCard";

const Home = (props) => {
    return (
        <>
            <section className="home__header">

            </section>
            <section className="home__over">
                <article className="home__oversection1">
                    <h2>Over Callizione</h2>
                    <p>Een tekst waarom jij Callizione zou moeten gebruiken </p>
                </article>
                <article className="home__oversection2">

                </article>
            </section>
            <section className="home__features">
                <h2 className="home__name">Onze Features</h2>
                <div className="home__featureCards">
                    <FeatureCard featureName="PC builder" featureInformation="Gebruik onze geoptimaliseerde PC builder om uw nieuwe computer samen te stellen!" />
                    <FeatureCard featureName="24/7 tech support" featureInformation="Voor problemen met onze producten kunt u elk moment van de dag onze support center bellen!" />
                    <FeatureCard featureName="Laptop kiezer" featureInformation="Met onze laptop kiezer kunt u de beste laptop vinden voor wat u nodig heeft!" />
                    <FeatureCard featureName="Retour" featureInformation="Niet goed? geld terug, zolang het product nog functioneel is kunt u binnen 2 maanden een voledige refund krijgen!" />
                </div>
            </section>
            <section className="home__prijs">
                <h2 className="section__title">Onze support packages</h2>
                <div className="home__featureCards">
                    <PriceCard priceCardTitle="Support package BASIC"/>
                </div>
            </section>
            <section className="home__contact">

            </section>
        </>
    )
}

export default Home;