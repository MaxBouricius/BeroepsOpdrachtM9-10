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
            <div className="home__onzefeatures">
                <h2>Onze Features</h2>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
            <div className="home__prijs">

            </div>
            <div className="home__contact">

            </div>
        </>
    )
}

export default Home;