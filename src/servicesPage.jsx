import image5 from "./OurServicesLogo.png";
import image6 from "./OurUpdateLogo.png";
import image7 from "./WithHumbleLogo.png";
import image8 from "./ThePowerLogo.png";

export default function ServicesPage(){
    return (
        <div className="servicesContent">
            <div className="headings">
                <p className="heading1">Our Services</p>
           <h1 className="heading2">Crafting Your Digital </h1>
           <h1 className="heading2">Story With Passion </h1>
            </div>

            <div className="cards-data">
                <div className="card1"> <img className="card-logos" src={image5}/><div className="line"></div><p>Our Services</p><h3>Regular Updates</h3></div>
                <div className="card2"><img className="card-logos" src={image6}/><div className="line"></div><p>Our Update</p><h3>Work From Home</h3></div>
                <div className="card3"><img className="card-logos" src={image7}/><div className="line"></div><p>With Humble</p><h3>Work With Humble</h3></div>
                <div className="card4"><img className="card-logos" src={image8}/><div className="line"></div><p>the power</p><h3>Clean Need Project</h3></div>
            </div>
        </div>
    )
}