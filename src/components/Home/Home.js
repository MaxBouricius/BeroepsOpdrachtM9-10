import "./Home.css"
import premiumPackageFeatures from "../../Data/premiumPackagesFeatures";
import standaardPackageFeatures from "../../Data/standaardPackageFeatures";
import basicPackageFeatures from "../../Data/basicPackageFeatures";
import FeatureCard from "../FeatureCard/FeatureCard";
import PriceCard from "../PriceCard/PriceCard";

const Home = (props) => {
    return (
        <>
            <section className="nav">
                <div className="nav__left">
                    <input className="nav__button nav__buttonWhite" type="button" name="over" value="Over" />
                    <input className="nav__button nav__buttonWhite" type="button" name="over" value="Features" />
                    <input className="nav__button nav__buttonWhite" type="button" name="over" value="Prijs" />
                    <input className="nav__button nav__buttonWhite" type="button" name="over" value="Contact" />
                </div>
                <div className="nav__right">
                    <input className="nav__button nav__buttonBlue" type="button" name="over" value="login" />
                </div>
            </section>

            <section className="section__wrapper section__header">
                <div>
                    <h1 className="home__headerTitle">MaxiTech</h1>
                    <p className="home__ctaText">
                        Wij zijn MaxiTech, bij ons kun je alles vinden van kabels tot kant en klare computers.
                        <br />
                        <br />
                        Maar het geneding waar wij het meest trots op zijn is ons ruime asortiment van computer onderdelen.
                    </p>
                </div>
                <div className="home__imageWrapper">
                    <img className="home__bannerImage" src="/img/bannerFoto.jpg" alt="" />
                </div>
            </section>

            <section className="section__wrapper section__over">
                <div className="home__overLeft">
                    <h2 className="section__title">Over MaxiTech</h2>
                    <div className="home__overText">
                        <p>Wij zijn een klein bedrijf gebaseerd in De Kwakel, eerst was het alleen onze CEO Max Peter Bouricius maar over tijd werdt het teveel werk voor alleen 1 persoon dus toen zijn wij langzamerhand uitgebreid tot het 17 man bedrijf wat wij vandaag zijn.</p>
                    </div>

                </div>
                <img className="home__overImage" src="/img/overFoto.jpg" alt="" />
            </section>

            <section className="section__wrapper">
                <h2 className="section__title">Onze Features</h2>
                <div className="home__featureCards">
                    <FeatureCard featureName="PC builder" featureInformation="Gebruik onze geoptimaliseerde PC builder om uw nieuwe computer samen te stellen!" />
                    <FeatureCard featureName="24/7 tech support" featureInformation="Voor problemen met onze producten kunt u elk moment van de dag onze support center bellen!" />
                    <FeatureCard featureName="Laptop kiezer" featureInformation="Met onze laptop kiezer kunt u de beste laptop vinden voor wat u nodig heeft!" />
                    <FeatureCard featureName="Retour" featureInformation="Niet goed? geld terug, zolang het product nog functioneel is kunt u binnen 2 maanden een voledige refund krijgen!" />
                </div>
            </section>

            <section className="section__wrapper">
                <h2 className="section__title">Onze support packages</h2>
                <div className="home__packages">
                    <PriceCard features={basicPackageFeatures} priceCardTitle="Support package basis" />
                    <PriceCard features={standaardPackageFeatures} priceCardTitle="Support package standaard" />
                    <PriceCard features={premiumPackageFeatures} priceCardTitle="Support package premium" />
                </div>
            </section>

            <section className="section__wrapper">
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