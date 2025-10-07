import mailgun from "./mailgun.png"
import painting from "./painting.png"
import illumos from "./illumos.png"
export default function Abovefooter(){
    return(
        <div className="LogoScroll">
            <marquee><div className="LogoSlide">
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
                <img src ={mailgun}/>
                <img src ={painting}/>
                <img src ={illumos}/>
            </div></marquee>
        </div>
    )
}