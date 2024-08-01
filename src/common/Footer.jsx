import "../style/Footer.css"

function Footer(){
    return(
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer" >
                        <div className="fonter-content-divs">
                            <h1 className="main-logo">Exclusive</h1>
                            <h5 className="font20px">Subscribe</h5>
                            <a className="font16px" href="">Get 10% off your first order</a>
                        </div>
                        <div className="fonter-content-divs">
                            <h5 className="font20px">Support</h5>
                            <a className="font16px" href="">111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</a>
                            <a className="font16px" href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                            <a className="font16px" href="tel:+88015-88888-9999">+88015-88888-9999</a>
                        </div>
                        <div className="fonter-content-divs">
                            <h5 className="font20px">Account</h5>
                            <a className="font16px" href="">My Account</a>
                            <a className="font16px" href="">Login / Register</a>
                            <a className="font16px" href="">Cart</a>
                            <a className="font16px" href="">Wishlist</a>
                            <a className="font16px" href="">Shop</a>
                        </div>
                        <div className="fonter-content-divs">
                            <h5 className="font20px">Quick Link</h5>
                            <a className="font16px" href="">Privacy Policy</a>
                            <a className="font16px" href="">Terms Of Use</a>
                            <a className="font16px" href="">FAQ</a>
                            <a className="font16px" href="">Contact</a>
                        </div>
                        <div className="fonter-content-divs">
                            <h5 className="font20px">Download App</h5>
                            <p className="download-p">Save $3 with App New User Only</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer