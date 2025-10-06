import logo1 from "./TeamMemberLogo.png";
import logo2 from "./projectcompleteLogo.png"
import logo3 from "./WinningAwardLogo.png"
import logo4 from "./ClientReview.png"

export default function Portfoli(){
    return (
        <div className="portfolioContent">
            <div className="Logoes">
                <div className="EachLogo">
                    <img className="teamMember" src={logo1}/>
                    <div>
                        <h2 className="count">200+</h2>
                        <h3 className="countName">Team Member</h3>
                    </div>
                </div>
                <div className="EachLogo">
                    <img className="teamMember" src={logo2}/>
                    <div>
                        <h2 className="count">10K+</h2>
                        <h3 className="countName">Project</h3><h3 className="countName">Complete</h3>
                    </div>
                </div>
                <div className="EachLogo">
                    <img className="teamMember" src={logo3}/>
                    <div>
                        <h2 className="count">50+</h2>
                        <h3 className="countName">Winning Award</h3>
                    </div>
                </div>
                <div className="EachLogo">
                    <img className="teamMember" src={logo4}/>
                    <div>
                        <h2 className="count">550+</h2>
                        <h3 className="countName">Client Review</h3>
                    </div>
                </div>
        </div>
        <div className="Portfolio_headingSection">
                <p className="head3">Portfolio</p>
                <h1 className="head4">Transforming Ideas Into</h1>
                <h1 className="head5">Digital Reality</h1>
            </div>

            <div className="cards-data-set">
                <div className="card-5"><div className="BOttomCard"><div className="data"><h4 className="data1">Building Design</h4><h3 className="data2">Content Creation Services</h3></div></div></div>
                <div className="card-6"><div className="BOttomCard"><div className="data"><h4 className="data1">Building Design</h4><h3 className="data2">Content Creation Services</h3></div></div></div>
                <div className="card-7"><div className="BOttomCard"><div className="data"><h4 className="data1">Building Design</h4><h3 className="data2">Content Creation Services</h3></div></div></div>
            </div>
        </div>
    )
}

