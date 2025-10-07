import {Header,Navbar,Hero,Getbutton, Searchbar,Discoverbtn,Scrollbar,BackImage} from "./header";
import About from "./aboutpage"
import ServicesPage from "./servicesPage";
import Workprocess from "./workprocess";
import Portfolio from "./portfolio";
import Blog from "./Blogpage"
import Details from "./detailspage";
import Abovefooter from "./aboveFooter";
import FooterPage from "./footer";

export default function App(){
    return (
        <>
        <div className="page1">
             <div className="top-data">
                <Header/>
                <BackImage/>
                <Navbar/>
                <Searchbar/>
                <Getbutton/>
            </div>
            <div>
                <Hero/>
                <Discoverbtn/>
            </div>
        </div>
        <div>
            <Scrollbar/>
        </div>
        <div className="page2">
            <About/>
        </div>
        <div className="page3">
            <ServicesPage/>
        </div>
        <div className="page4">
            <Workprocess/>
        </div>
        <div className="page5">
            <Portfolio/>
        </div>
         <div className="page6">
            <Blog/>
        </div>
        <div className="page7">
            <Details/>
        </div>
        <div className="page8">
            <Abovefooter/>
        </div>
        <div className="page9">
            <FooterPage/>
        </div>
        </>
        
    )
}