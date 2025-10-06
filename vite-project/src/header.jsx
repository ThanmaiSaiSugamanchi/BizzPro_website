import logo from "./logo.png"
export function Header(){
    return(
        <section className="head">
           <img className="logo" src={logo}/>
        </section>
     
    )
}
export function BackImage(){
    return(
        <div className="backimage"></div>
    )
}
export function Navbar(){
    return (
        <nav className="navbar">
                <ul className="nav-list">
                    <a href="#" className="nav-data">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(0,0,0,1)"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg></a>
                    <a href="#" className="nav-data">About</a>
                    <a href="#" className="nav-data">Service <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(0,0,0,1)"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg></a>
                    <a href="#" className="nav-data">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(0,0,0,1)"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg></a>
                    <a href="#" className="nav-data">Blog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(0,0,0,1)"><path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path></svg></a>
                    <a href="#" className="nav-data">Contact</a>
                </ul>
        
            </nav>
    )
}
export function Getbutton(){
    return(
        <button className="button1">GET A QUOTE <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
    )
}
export function Searchbar(){
    return (
        <div className="nav-and-search">
        
        <p className="search-bar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="20" fill="rgba(0, 0, 0, 1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></p>
        <p className="Hamburger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(0,0,0,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></p>
    </div>
    )
}
export function Hero(){
    return (
        <>
          <div className="text1">
            <h1>Crafting your digital story with passion</h1>
        </div>
        <div className="text2">
            <p className="tex">Payment solutions enable businesses to accept payments Payment solutions</p>
            <p className="tex">enable businesses to accept payments from customers conveniently securely</p>
            <p className="tex">from customers conveniently and securely.</p>
        </div>

        </>
      
    )
}

export function Discoverbtn(){
    return (
        <button className="discoverbtn">Discover More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="20" fill="rgba(255,255,255,1)"><path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path></svg></button>
    )
}

export function Scrollbar(){
    return <h1 className="scrollbar"><marquee>Web Development&nbsp;&nbsp;<span>*</span>&nbsp;&nbsp;Email Marketing&nbsp;&nbsp;<span>*</span>Brand Identity&nbsp;&nbsp;<span>*</span>&nbsp;&nbsp;Brand Identity&nbsp;&nbsp;<span>*</span>&nbsp;&nbsp;Digital Transformation&nbsp;&nbsp;<span>*</span>&nbsp;&nbsp;Digital Marketing&nbsp;&nbsp;</marquee></h1>
}