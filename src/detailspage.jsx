import clients from "./clients.png";
import star from "./star.png";
export default function Details(){
    return(
        <div className="detailsData">
          <div className="Form">
            <form className="formd">
                <input type="text" className="form-field" placeholder="Name*"/>
                <input type="text" className="form-field" placeholder="E-Mail*"/>
                <input type="text" className="form-field" placeholder="Subject*"/>
                <textarea type="text" className="form-field1" placeholder="Comment*"/>
            </form>
            <button className="Submitbtn">Submit</button>
          </div>
          <div className="sideField">
<div className="phoneNumberField">
            <div className="Leftarrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
            <div className="call">Call now</div>
            <div className="number">(808) 555- 1111</div>
          </div>
          <div className="imageField"><div><img className="star" src={star}/></div></div>
          
           
          
          <div className="clientBorder">
            <div className="Clients">
                <img src={clients}/>
                <h2 clientCount>5,000+</h2>
                
            </div>
                <h4 className="Satisfiedclients">Satisfied clients</h4>
            </div>
            
           
           
            
          </div>
          
          

        </div>
    )
}