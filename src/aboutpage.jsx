import image1 from "./image2.png"
import image2 from "./dialyactivity.png"
import image4 from "./DigitalBusinessLogo.png"
import image3 from "./digitalmarketingLogo.png"
export default function About() {
  return (
    <div className="section2">
      <div className="imagesec1">
        <div className="blackcircle">
          <div><img className="png1" src={image1}/></div>
        </div>  
      </div>
      <div className="imagesec2">
          <div className="smallcircle"></div>
          <div className="image-2"><img src={image2}/></div>
          <p className="activityContent1">Dialy Activity</p>
          <p className="activtyContent2">Loream is ispam</p>
      </div>
      <div className="contentsec">
        <p className="abouthding">About Us</p>
        <div className="aboutheading"><h1 className="text-h">Innovative solutions </h1>
        <h1 className="text-h">For digital success </h1></div>
        
        <div className="paratext">
          <p className="para">Payment solutions enable businesses to accept payments Payment solutions</p>
          <p className="para">enable businesses to accept payments from customers conveniently securely</p>
          <p className="para">from customers conveniently and securely.</p>

        </div>

      </div>
      <div className="percentages">
        <div className="digitalMarketing">
          <img className="img3" src={image3}/>
          <div className="word1">Digital Marketing</div>
           <h3 className="percent">95%</h3>
          <div className="pendingline1"></div>
          <div className="percentline1"></div>
          
        </div>
        <div className="digitalBusiness">
          <img className="img4" src={image4}/>
          <div className="word2">
            Digital Business
          </div>
          <h3 className="percent">90%</h3>
          <div className="pendingline2"></div>
          <div className="percentline2"></div>
        </div>
      </div>
    </div>
  );
}
