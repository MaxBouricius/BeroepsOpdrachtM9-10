import "./Home.css"
import premiumPackageFeatures from "../../Data/premiumPackagesFeatures";
import standaardPackageFeatures from "../../Data/standaardPackageFeatures";
import basicPackageFeatures from "../../Data/basicPackageFeatures";
import FeatureCard from "../FeatureCard/FeatureCard";
import PriceCard from "../PriceCard/PriceCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Home = (props) => {
    return (
        <>
            
            <Navbar/>
            <section className="section__wrapper section__header">
                <div className="section__container">
                    <h1 className="home__headerTitle">MaxiTech</h1>
                    <p className="home__ctaText">
                        Wij zijn MaxiTech, bij ons kun je alles vinden van kabels tot kant en klare computers.
                        <br />
                        <br />
                        Maar het ding waar wij het meest trots op zijn is ons ruime asortiment van computer onderdelen.
                    </p>
                </div>
                <div className="home__imageWrapper">
                    <img className="home__bannerImage" src="/img/bannerFoto.jpg" alt="" />
                </div>
            </section>

            <section className="section__wrapper section__header">
                <div className="section__container">
                    <h2 className="section__title">MaxiTech</h2>
                    <p className="home__ctaText">
                    Wij zijn een klein bedrijf gebaseerd in De Kwakel, eerst was het alleen onze CEO Max Peter Bouricius  maar over tijd werdt
                    <br/>
                    <br />
                    het teveel werk voor alleen 1 persoon dus toen zijn wij langzamerhand uitgebreid tot het 17 man bedrijf wat wij vandaag zijn.
                    </p>
                </div>
                <div className="home__imageWrapper">
                    <img className="home__bannerImage" src="/img/overFoto.jpg" alt="" />
                </div>
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
                    <input className="contact__text contact__bericht" type="text" placeholder="Zet hier jou vraag" />
                    <div className="send__wrapper">
                        <input className="contact__button" type="button" value="Send!" />
                    </div>
                    
                </article>
            </section>

            <Footer/>
            
        </>
    )
}

export default Home;