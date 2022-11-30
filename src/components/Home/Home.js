import "./Home.css"
import premiumPackageFeatures from "../../Data/premiumPackagesFeatures";
import standaardPackageFeatures from "../../Data/standaardPackageFeatures";
import basicPackageFeatures from "../../Data/basicPackageFeatures";
import FeatureCard from "../FeatureCard/FeatureCard";
import PriceCard from "../PriceCard/PriceCard";

const Home = (props) => {
    return (
        <>

            <section className="home__nav">

            </section>
            <section className="home__header">
                <img className="home__bannerImage" src="/img/bannerFoto.jpg" alt="" />
            </section>
            <section className="home__over">
                <div>
                    <h2 className="section__title">Over Maxitech</h2>
                    <p className="home__text">Een tekst waarom jij Callizione zou moeten gebruiken </p>
                </div>
                <img className="home__image" src="/img/placeholderFoto.png" alt="" />
            </section>
            <section className="home__features">
                <h2 className="section__title">Onze Features</h2>
                <div className="home__featureCards">
                    <FeatureCard featureName="PC builder" featureInformation="Gebruik onze geoptimaliseerde PC builder om uw nieuwe computer samen te stellen!" />
                    <FeatureCard featureName="24/7 tech support" featureInformation="Voor problemen met onze producten kunt u elk moment van de dag onze support center bellen!" />
                    <FeatureCard featureName="Laptop kiezer" featureInformation="Met onze laptop kiezer kunt u de beste laptop vinden voor wat u nodig heeft!" />
                    <FeatureCard featureName="Retour" featureInformation="Niet goed? geld terug, zolang het product nog functioneel is kunt u binnen 2 maanden een voledige refund krijgen!" />
                </div>
            </section>
            <section className="home__prijs">
                <h2 className="section__title">Onze support packages</h2>
                <div className="home__packages">
                    <PriceCard features={basicPackageFeatures} priceCardTitle="Support package basis" />
                    <PriceCard features={standaardPackageFeatures} priceCardTitle="Support package standaard" />
                    <PriceCard features={premiumPackageFeatures} priceCardTitle="Support package premium" />
                </div>
            </section>
            <section className="home__contact">
                <h2 className="section__title">Contact</h2>
                <article className="contact__inputSection">
                    <p className="contact__title">Name</p>
                    <input className="contact__text" type="text" placeholder="Zet hier je naam" />
                    <p className="contact__title">Email</p>
                    <input className="contact__text" type="text" placeholder="Zet hier je email" />
                    <p className="contact__title">Bericht / vraag</p>
                    <input className="contact__text" type="text" placeholder="Zet hier jou vraag" />
                </article>
                <input className="contact__button" type="button" value="Send!" />
            </section>
            <footer className="footer">
                <section>
                    <p>2022 Maxitech - Toegangelijkheid bij Maxitech - Privacycenter - Cookies - Pricacybeleid </p>
                </section>
            </footer>
        </>
    )
}

export default Home;